import { add_todo, edit_todo, remove_todo, toggle_status } from "./actiontypes";

export const Reducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case add_todo: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case toggle_status: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case remove_todo: {
      return {
        ...state,
        todos: action.payload,
      };
    }

    case edit_todo: {
      return { ...state };
    }

    default: {
      return state;
    }
  }
};
