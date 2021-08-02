const express = require("express");
const router = require("express").Router();
const Todo = require("../models/Todo");

// GET ALL TODOS
router.get("/", async (req, res) => {
  try {
    let todos = await Todo.find({}).sort({ createdAt: -1 });

    res.status(200).json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err);
  }
});
// GET SINGLE TODO
router.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let todos = await Todo.findById(id);
    res.status(200).json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).json(err);
  }
});

// ADD TODP
router.post("/", async (req, res) => {
  const todo = new Todo(req.body);
  try {
    const savedTodo = await todo.save();
    res.status(200).json(savedTodo);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// DELETE TODO
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Todo.findByIdAndDelete(id);

    res.status(200).json({ msg: "Delete was successfull" });
  } catch (err) {
    res.status(500).send("delete error");
  }
});

// EDIT TODO
router.put("/edit/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
