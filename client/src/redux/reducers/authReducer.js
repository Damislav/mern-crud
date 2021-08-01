import { LOGIN_USER, LOGOUT } from "../actions/types";

let userState;
// check if local storage has auth object if it does not return null

if (window.localStorage.getItem("auth")) {
  // get data from localstorage and assign it to userState variable
  userState = JSON.parse(window.localStorage.getItem("auth"));
} else {
  userState = null;
}

//        eslint-disable-next-line
export default function (state = userState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return action.payload;
    default: {
      return state;
    }
  }
}
