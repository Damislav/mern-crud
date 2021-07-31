import React, { useState } from "react";
import { connect } from "react-redux";
import "./TodoItem.css";
import {
  deleteContact,
  updateContact,
  toggleCompletedTodo,
  getContact,
} from "../../redux/actions/todoActions";
import moment from "moment";
import axios from "axios";

// todo, deleteContact
const TodoItem = ({ todo, deleteContact }) => {
  const [item, setItem] = useState("");
  const onDeleteClick = (id) => {
    //// DELETE CONTACT ////
    deleteContact(id);
  };
  // const handleEdit = () => {
  //   //// EDIT ////

  // toggle line through completed

  const handleCompleted = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/${id}`);
    console.log(`${process.env.REACT_APP_API}/${id}`);

    setItem({ ...res.data, cock: true });
    console.log(item);
  };

  return (
    <div>
      <div className="todo-container">
        <span onClick={() => handleCompleted(todo._id)}>Call single todo</span>
        <h4 className={todo.completed ? "completed  item-text" : "item-text"}>
          {todo.text}
        </h4>
        <div className="icon-container">
          <span>
            {moment(todo.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </span>
          <button className="icon-button">
            <i className="fas fa-pen"></i>
          </button>
          <button
            onClick={() => onDeleteClick(todo._id)}
            className="icon-button"
            variant="contained"
            color="primary"
          >
            <i className="far fa-trash-alt"></i>
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default connect(null, {
  deleteContact,
  updateContact,
  toggleCompletedTodo,
  getContact,
})(TodoItem);
