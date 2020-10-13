// Reducer
import { uiReducer } from '../reducer';

// Actions
import { uiActions } from '../actions';

describe('ui reducer:', () => {
    test('should return initial state by default', () => {
        expect(uiReducer(void 0, {})).toMatchInlineSnapshot(`
Object {
  "isFetching": false,
}
`);
    });

    test('should handle START_FETCHING action', () => {
        expect(uiReducer(void 0, uiActions.startFetching()))
            .toMatchInlineSnapshot(`
Object {
  "isFetching": true,
}
`);
    });

    test('should handle STOP_FETCHING action', () => {
        expect(uiReducer(void 0, uiActions.stopFetching()))
            .toMatchInlineSnapshot(`
Object {
  "isFetching": false,
}
`);
    });
});
