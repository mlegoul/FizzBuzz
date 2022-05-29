import {index} from '../src';

describe('Main maths operations', () => {
    it('Addition : adds 1 + 2 to equal 3', async () => {
        // GIVEN
        const a = 1;
        const b = 2;

        // WHEN
        const result = index(a, b);

        // THEN
        expect(result).toBe(0);
    });
});
