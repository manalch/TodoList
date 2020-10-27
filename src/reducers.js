import { combineReducers } from "redux";

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      const todos = state.filter(todo => todo.id !== action.payload);
      return todos;

    default:
      return state;
  }
}

export default combineReducers({
  todos
});
