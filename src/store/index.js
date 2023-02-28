import { createStore } from "redux";
import {combineReducers} from 'redux';
import { filters } from './filters/filter-reducer'
import { todoList } from "./todos/todos-reducer";
import { loadState, saveState } from './local-storage'
import throttle from 'lodash/throttle'

export const rootReducer = combineReducers({
    todoList,
    filters,
})



export const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(throttle(() => {
    saveState({
      todoList: store.getState().todoList,
    })
  }, 1000))
  return store;
} 