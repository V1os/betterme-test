// Core
import { combineReducers } from 'redux';

// Reducers
import { searchDataReducer as search } from '../bus/search/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    search,
    ui,
});
