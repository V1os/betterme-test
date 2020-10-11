// Core
import { delay } from './';

describe('instruments:', () => {
    test('delay function should return a resolved promise', async () => {
        await expect(delay()).resolves.toBeUndefined();
    });
});
