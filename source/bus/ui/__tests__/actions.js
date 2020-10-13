// Actions
import { uiActions } from '../actions';

describe('ui actions:', () => {
    test('startFetching', () => {
        expect(uiActions.startFetching()).toMatchInlineSnapshot(`
Object {
  "type": "START_FETCHING",
}
`);
    });

    test('stopFetching', () => {
        expect(uiActions.stopFetching()).toMatchInlineSnapshot(`
Object {
  "type": "STOP_FETCHING",
}
`);
    });

    test('emitError', () => {
        expect(uiActions.emitError(__.error)).toMatchInlineSnapshot(`
Object {
  "error": true,
  "meta": null,
  "payload": [Error: TEST_ERROR_MESSAGE.],
  "type": "EMIT_ERROR",
}
`);
    });

    test('emitError', () => {
        expect(uiActions.emitError(__.error, 'fetchPosts worker'))
            .toMatchInlineSnapshot(`
Object {
  "error": true,
  "meta": "fetchPosts worker",
  "payload": [Error: TEST_ERROR_MESSAGE.],
  "type": "EMIT_ERROR",
}
`);
    });
});
