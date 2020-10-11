// Types
import { types } from './types';

export const searchActions = {
    // Sync
    fillSearchData: (data) => {
        return {
            type:    types.FILL_SEARCH_DATA,
            payload: data,
        };
    },
    removeSearchData: () => {
        return {
            type: types.REMOVE_SEARCH_DATA,
        };
    },

    // Async
    fetchPostsAsync: (parameters) => {
        return {
            type:    types.FETCH_SEARCH_DATA_ASYNC,
            payload: { parameters },
        };
    },
};
