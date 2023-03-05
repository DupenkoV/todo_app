import { SET_FILTER } from "./filter-constans";
export const filters = (state = 'all', action) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.payload
        }
        default: {
            return state;
        }
    }
}