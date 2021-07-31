import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { getContacts } from "../../redux/actions/todoActions";
const TodoContainer = (props) => {
  useEffect(() => {
    props.getContacts();
    // console.log(props.getContacts);
  }, []);

  return (
    <>
      <TodoForm />
      {props.todos.map((todo) => {
        return <TodoItem key={todo._id} todo={todo} />;
      })}
    </>
  );
};

// mapping state from redux to local component

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { getContacts })(TodoContainer);
