import { createStore } from "redux";

let todoIdNumber = 2;

const initialState = [
  { id: 1, title: "Learn React", completed: "false" },
  { id: 2, title: "Learn Redux", completed: "false" }
];

const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          id: ++todoIdNumber,
          title: action.title,
          completed: false
        }
      ];
    }
    case "REMOVE_TODO": {
      return state.filter((todo) => todo.id !== action.id);
    }
    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.id === action.id
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

export const store = createStore(
  todoList,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const addTodo = (title) => ({
  type: "ADD_TODO",
  title
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id
});
