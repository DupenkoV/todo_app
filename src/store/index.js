import { createStore } from "redux";
import {combineReducers} from 'redux';
import { filters } from './filters/filter-reducer'
import { todoList } from "./todos/todos-reducer";

export const rootReducer = combineReducers({
    todoList,
    filters,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );