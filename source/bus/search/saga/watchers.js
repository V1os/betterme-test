// Core
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { types } from '../types';

// Workers
import { fetchSearchData } from './workers';

function* watchFetchSearchData () {
    yield takeEvery(types.FETCH_SEARCH_DATA_ASYNC, fetchSearchData);
}

export function* watchSearch () {
    yield all([
        call(watchFetchSearchData)
    ]);
}
