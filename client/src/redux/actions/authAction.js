import axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "./types";

// ¸get all todos

// add todos
export const registerUser = (user) => async (dispatch) => {
  const res = await axios.post(`${process.env.REACT_APP_API}/register`, user);
  dispatch({
    type: REGISTER_USER,
    payload: res.data,
  });
};
export const loginUser = (user) => async (dispatch) => {
  const res = await axios.post(`${process.env.REACT_APP_API}/login`, user);
  dispatch({
    type: LOGIN_USER,
    payload: res.data,
  });
};
export const login = async (user) => {
  return await axios.post(`${process.env.REACT_APP_API}/login`, user);
};

// export const register = async (user) => {
//   return await axios.post(`${process.env.REACT_APP_API}/register`, user);
// };

// export const login = async (user) => {
//   return await axios.post(`${process.env.REACT_APP_API}/login`, user);
// };
