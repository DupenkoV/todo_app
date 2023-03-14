import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: '@@filter',
    initialState: 'all',
    reducers: {
        setFilter: (state, {payload}) => {
            return payload
        }
    }
})

export const { setFilter } = filterSlice.actions;
