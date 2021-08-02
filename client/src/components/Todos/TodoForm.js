import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { addContacts } from "../../redux/actions/todoActions";
import "./TodoForm.css";
const TodoForm = ({ addContacts }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text) {
      const newTodo = {
        text: text,
        completed: false,
        user: user.username,
      };
      addContacts(newTodo);
      setText("");
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={handleSubmit}>
      <input onChange={handleChange} value={text} />

      <button className="btn-form">Submit</button>
    </form>
  );
};

export default connect(null, { addContacts })(TodoForm);
