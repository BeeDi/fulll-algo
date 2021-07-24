const fizzbuzzLoop = require('./fizzbuzzLoop');
const consoleMock = jest.spyOn(console, 'log').mockImplementation();

describe('Testing FizzBuzz Loop implementation', () => {
    beforeEach(() => {
        consoleMock.mockClear();
    });

    test('by default, loop 10 times', () => {
        fizzbuzzLoop();
        expect(console.log).toBeCalledTimes(10);
    });
});


