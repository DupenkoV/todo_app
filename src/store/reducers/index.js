import {combineReducers} from 'redux';
import { filters } from './filter-reducer'
import { todoList } from "./todo-reducer";
export const rootReducer = combineReducers({
    todoList,
    filters,
})