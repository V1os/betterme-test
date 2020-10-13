// Types
import { types } from './types';

const initialState = {
    list:  [],
    links: { },
    total: 0,
};

export const searchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_SEARCH_DATA:
            return {
                ...state,
                ...action.payload,
            };

        case types.REMOVE_SEARCH_DATA:
            return initialState;

        default:
            return state;
    }
};
