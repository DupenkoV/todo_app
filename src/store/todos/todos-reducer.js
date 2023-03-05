import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './todos-constans'



export const todoList = (state = [], action) => {
  let todoIdNumber = state.length > 0 ? state[state.length - 1].id : 0

  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: ++todoIdNumber, 
          title: action.payload,
          completed: false
        }
      ];
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      );
    }
    default: {
      return state;
    }
  }
};