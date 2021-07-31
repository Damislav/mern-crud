import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  GET_CONTACT,
  GET_CONTACTS,
  TOGGLE_COMPLETED,
  UPDATE_CONTACT,
} from "../actions/types";

const initialState = {
  todos: [],
  contact: {},
};

//        eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        todos: action.payload,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };
    case DELETE_CONTACTS:
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo._id !== action.payload;
        }),
      };
    case ADD_CONTACTS:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case UPDATE_CONTACT: {
      return {
        ...state,
        todos: state.contacts.map((contact) => {
          return contact.id === action.payload.id
            ? (contact = action.payload)
            : contact;
        }),
      };
    }
    case TOGGLE_COMPLETED: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return todo._id === action.payload.id
            ? (todo = action.payload)
            : todo;
        }),
      };
    }

    default:
      return state;
  }
}
