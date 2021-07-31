import { combineReducers } from "redux";
import contactReducer from "./reducers/todoReducer";

export default combineReducers({
  todos: contactReducer,
});
