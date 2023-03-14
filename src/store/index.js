import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from './filters/filterSlice'
import { todoSlice } from "./todos/todosSlice";


export const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
    filter: filterSlice.reducer,
  },
  devTools: true,
})