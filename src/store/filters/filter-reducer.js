import { createReducer, createSlice } from "@reduxjs/toolkit";
import { setFilter } from "./filter-actionsCreators";


// export const filters = createReducer(['all'], (builder) => {
//     builder
//         .addCase(setFilter, (state, {payload}) => {
//             state[0] = payload
//         })
// })


export const filterSlice = createSlice({
    name: '@@filter',
    initialState: ['all'],
    reducers: {
        setFilter: (state, {payload}) => {
            state[0] = payload
        }
    }
})
// export const filters = (state = 'all', {type, payload}) => {
//     switch (type) {
//         case setFilter.toString(): {
//             return payload
//         }
//         default: {
//             return state;
//         }
//     }
// }