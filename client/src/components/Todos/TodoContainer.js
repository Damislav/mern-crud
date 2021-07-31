import React, { useEffect } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { getContacts } from "../../redux/actions/todoActions";
import "./TodoContainer.css";

const TodoContainer = (props) => {
  useEffect(() => {
    props.getContacts();
    // console.log(props.getContacts);
  }, []);

  return (
    <>
      <div className="todos_container">
        {props.todos.map((todo, i) => {
          return <TodoItem index={i} key={todo._id} todo={todo} />;
        })}
      </div>
    </>
  );
};

// mapping state from redux to local component

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { getContacts })(TodoContainer);
