import {FizzBuzz} from '../src';

describe('Main maths operations', () => {
    it('Addition : adds 1 + 2 to equal 3', async () => {
        // GIVEN
        const a = 1;
        const b = 2;

        // WHEN
        const result = new FizzBuzz;

        // THEN
        expect(result.addition(a, b)).toBe(3);
    });
});
