import axios from "axios";
import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  GET_CONTACT,
  GET_CONTACTS,
  TOGGLE_COMPLETED,
  UPDATE_CONTACT,
} from "./types";

export const getContacts = () => async (dispatch) => {
  const res = await axios.get(process.env.REACT_APP_API);

  dispatch({
    type: GET_CONTACTS,
    payload: res.data,
  });
};

export const getContact = (id) => async (dispatch) => {
  const res = await axios.get(`${process.env.REACT_APP_API}/${id}`);
  console.log(res.data);
  dispatch({
    type: GET_CONTACT,
    payload: res.data,
  });
};

export const deleteContact = (id) => async (dispatch) => {
  await axios.delete(`${process.env.REACT_APP_API}/${id}`);
  dispatch({
    type: DELETE_CONTACTS,
    payload: id,
  });
};
// şubmit
export const addContacts = (todo) => async (dispatch) => {
  const res = await axios.post(process.env.REACT_APP_API, todo);
  dispatch({
    type: ADD_CONTACTS,
    payload: res.data,
  });
};
export const updateContact = (todo) => async (dispatch) => {
  const res = await axios.put(`${process.env.REACT_APP_API}/${todo.id}`, todo);
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data,
  });
};

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
