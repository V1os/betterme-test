// Core
import { createStore, combineReducers } from 'redux';

// Reducers
import { searchDataReducer as search } from '../../bus/search/reducer';
import { uiReducer as ui } from '../../bus/ui/reducer';

// Store
import { store } from '../store';

const referenceRootReducer = combineReducers({
    search,
    ui,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });
});
