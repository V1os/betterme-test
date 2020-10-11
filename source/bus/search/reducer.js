// Core
import { fromJS, List } from 'immutable';

// Types
import { types } from './types';

const initialState = List([]);

export const searchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_SEARCH_DATA:
            return fromJS(action.payload);

        case types.REMOVE_SEARCH_DATA:
            return state.clear();

        default:
            return state;
    }
};
