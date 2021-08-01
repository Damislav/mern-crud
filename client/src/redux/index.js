import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import contactReducer from "./reducers/todoReducer";

export default combineReducers({
  todos: contactReducer,
  user: authReducer,
});
