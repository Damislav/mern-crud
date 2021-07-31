import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions/todoActions";
const TodoItem = ({ todo, deleteContact }) => {
  const style = {
    textDecoration: "line-through",
  };
  const styling = todo.completed ? style : null;
  const onDeleteClick = (id) => {
    //// DELETE CONTACT ////

    deleteContact(id);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={styling}>{todo.text}</h2>
      <button>Edit</button>

      <button onClick={() => onDeleteClick(todo._id)}>Delete</button>
    </div>
  );
};

export default connect(null, { deleteContact })(TodoItem);
