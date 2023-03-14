import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from 'redux';
import { filterSlice } from './filters/filterSlice'
import { todoSlice } from "./todos/todosSlice";

export const rootReducer = combineReducers({
    todoList: todoSlice.reducer,
    filter: filterSlice.reducer,
})

export const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
    filter: filterSlice.reducer,
  },
  devTools: true,

})