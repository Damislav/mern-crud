import axios from "axios";
import {
  ADD_CONTACTS,
  ADD_USER,
  DELETE_CONTACTS,
  GET_CONTACT,
  GET_CONTACTS,
  TOGGLE_COMPLETED,
  UPDATE_CONTACT,
} from "./types";

// ¸get all todos
export const getContacts = () => async (dispatch) => {
  const res = await axios.get(process.env.REACT_APP_API);

  dispatch({
    type: GET_CONTACTS,
    payload: res.data,
  });
};
// ¸get single todo
export const getContact = (id) => async (dispatch) => {
  const res = await axios.get(`${process.env.REACT_APP_API}/${id}`);
  console.log(res.data);
  dispatch({
    type: GET_CONTACT,
    payload: res.data,
  });
};

// add todos
export const addContacts = (todo) => async (dispatch) => {
  const res = await axios.post(process.env.REACT_APP_API, todo);
  dispatch({
    type: ADD_CONTACTS,
    payload: res.data,
  });
};

//  delete todo
export const deleteContact = (id) => async (dispatch) => {
  await axios.delete(`${process.env.REACT_APP_API}/${id}`);
  dispatch({
    type: DELETE_CONTACTS,
    payload: id,
  });
};
// ¸edit todo
export const updateContact = (todo) => async (dispatch) => {
  const res = await axios.put(`${process.env.REACT_APP_API}/${todo.id}`, todo);
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data,
  });
};
// ¸toggle todo
export const toggleCompletedTodo = (todo) => async (dispatch) => {
  const res = await axios.patch(
    `${process.env.REACT_APP_API}/${todo.id}/`,
    todo
  );
  dispatch({
    type: TOGGLE_COMPLETED,
    payload: res.data,
  });
};
// ¸-------------------------------------------------------------------------------
// ¸another way of writing it
const userDeleted = () => ({
  type: DELETE_CONTACTS,
});
export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((response) => {
        dispatch(userDeleted());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// ¸another way of writing it
const getUsers = (users) => ({
  type: GET_CONTACTS,
  payload: users,
});
export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(process.env.REACT_APP_API)
      .then((response) => {
        console.log("response", response);
        dispatch(getUsers(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const userAdded = () => ({
  type: ADD_USER,
});
export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((response) => {
        console.log("response", response);
        dispatch(userAdded());
        // dispatch(loadUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
