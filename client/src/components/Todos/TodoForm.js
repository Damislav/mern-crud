import React, { useState } from "react";
import { connect } from "react-redux";
import { addContacts } from "../../redux/actions/todoActions";
const TodoForm = ({ addContacts }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    if (text) {
      const newTodo = {
        text: text,
        completed: false,
      };
      addContacts(newTodo);
      setText("");
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={text} />
      <button>Submit</button>
    </form>
  );
};

export default connect(null, { addContacts })(TodoForm);
