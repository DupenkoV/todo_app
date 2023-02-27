import { SET_FILTER } from "../constans/filter-constans";

export const filters = (state = 'all', action) => {
    switch (action.type) {
        case SET_FILTER: {
            return action.filter
        }
        default: {
            return state;
        }
    }
}