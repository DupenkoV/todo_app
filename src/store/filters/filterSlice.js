import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: '@@filter',
    initialState: ['all'],
    reducers: {
        setFilter: (state, {payload}) => {
            state[0] = payload
        }
    }
})

export const { setFilter } = filterSlice.actions;
