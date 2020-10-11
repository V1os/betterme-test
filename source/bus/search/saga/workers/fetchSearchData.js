// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { searchActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* fetchSearchData ({ payload: { parameters = {}} = { payload: {}}}) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.search.fetch, [parameters]);

        console.log('->', response);
        const { items: dataSearch, total_count, incomplete_results } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error('Some error request');
        }

        yield put(searchActions.fillSearchData(dataSearch));
    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchSearchData worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
