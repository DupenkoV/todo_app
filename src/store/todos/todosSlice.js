import { nanoid, createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
  name: '@@todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, {payload}) => {
        state.push(payload)
      },
      prepare: (title) => ({
        payload: {
          title,
          id: nanoid(),
          completed: false,
        }
      })
    },
    removeTodo: (state, {payload}) => {
      const id = payload;
      return state.filter(item => item.id !== id)
    },
    toggleTodo: (state, {payload}) =>{
      const id = payload;
      const todo = state.find((item) => item.id === id)
      todo.completed = !todo.completed
    },
  }
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;