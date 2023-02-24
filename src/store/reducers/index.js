import {combineReducers} from 'redux';

import { todoList } from "./todo-reducer";
export const rootReducer = combineReducers({todoList,})