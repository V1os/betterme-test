// Core
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchSearch } from '../bus/search/saga/watchers';

export function* rootSaga () {
    yield all([call(watchSearch)]);
}
