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
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";

// todo, deleteContact
const TodoItem = ({ todo, deleteContact }) => {
  const [item, setItem] = useState("");
  const [text, setText] = useState("");
  const [checkbox, setCheckbox] = useState(todo.completed);

  const onDeleteClick = (id) => {
    //// DELETE CONTACT ////
    deleteContact(id);
  };

  const handleCompleted = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/${id}`);
    console.log(`${process.env.REACT_APP_API}/${id}`);

    setItem({ ...res.data, cock: true });
    console.log(item);
  };

  // const handleCheckbox = (e) => {
  //   setCheckbox(!checkbox);
  // };
  const handleCheckbox = (e) => {
    setCheckbox(!checkbox);
  };

  return (
    <div>
      {todo ? (
        <div className="todo-container">
          <span>
            <input
              onChange={(e) => handleCheckbox(e)}
              checked={checkbox}
              onClick={() => handleCompleted(todo._id)}
              type="checkbox"
            />
          </span>
          <input
            disabled
            style={{ background: "none", outline: "none" }}
            className={todo.completed ? "completed  item-text" : "item-text"}
            value={todo.text}
          />

          <div className="icon-container">
            <span>
              {moment(todo.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
            </span>
            <Link to={`/edit/${todo._id}`} className="icon-button">
              <i className="fas fa-pen"></i>
            </Link>
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
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default connect(null, {
  deleteContact,
  updateContact,
  toggleCompletedTodo,
  getContact,
})(TodoItem);
