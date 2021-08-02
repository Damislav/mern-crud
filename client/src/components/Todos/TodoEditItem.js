import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  deleteContact,
  getContact,
  updateContact,
} from "../../redux/actions/todoActions";
import Spinner from "../Spinner/Spinner";

const TodoEditItem = (props) => {
  const history = useHistory();
  const todo = useSelector((state) => ({ ...state.todos.todo }));
  const [text, setText] = useState(todo.text);
  const [canEdit, setCanEdit] = useState(false);

  // const [checkbox, setCheckbox] = useState(todo.checkbox);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContact(props.match.params._id));
  }, []);
  const onDeleteClick = (id) => {
    //// DELETE CONTACT ////
    deleteContact(id);
    history.push("/");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleEditItem = () => {
    setCanEdit(!canEdit);
    if (setCanEdit) {
      const newTodo = { ...todo, text: text };

      dispatch(updateContact(newTodo));
    }
  };
  return (
    <div>
      <div>
        {todo ? (
          <div className="todo-container">
            <span>
              <input type="checkbox" />
            </span>
            <form>
              <input
                // placeholder={todo.text}
                value={text}
                onChange={handleChange}
                disabled={canEdit === false}
                style={{ background: "none", outline: "none" }}
                className={
                  todo.completed ? "completed  item-text" : "item-text"
                }
              />
            </form>
            <div className="icon-container">
              <span>
                {moment(todo.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              </span>{" "}
              <span onClick={handleEditItem} className="icon-button">
                <i className="fas fa-pen"></i>
              </span>
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
    </div>
  );
};

export default TodoEditItem;
