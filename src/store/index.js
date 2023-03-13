import { createStore } from "redux";
import {combineReducers} from 'redux';
import { filterSlice } from './filters/filterSlice'
import { todoSlice } from "./todos/todosSlice";
import { loadState, saveState } from './local-storage'
import throttle from 'lodash/throttle'

export const rootReducer = combineReducers({
    todoList: todoSlice.reducer,
    filter: filterSlice.reducer,
})



export const configureStore = () => {
  const persistedState = loadState();
  /**
   * посмотри доку редакс тулкит (ссылка ниже) инициализация стора проще и ненадо допом цепляsть инхенсер
   * https://redux-toolkit.js.org/api/configureStore
   */
  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /**
   * эт вообще какой то ужас) зачем это?) такой код лучше комментить, я вообще хз нахрена с простом редаксе подключать лодаш
   * для начальной инициализации можно просто мокнуть данные а так выглядит моструозно))
   */
  store.subscribe(throttle(() => {
    saveState({
      todoList: store.getState().todoList,
    })
  }, 1000))
  return store;
} 