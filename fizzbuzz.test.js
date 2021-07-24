const fizzbuzz = require('./fizzbuzz');

test('1 is the minimum value', () => {
    expect(() => {
        fizzbuzz(0);
    })
        .toThrow();
});

test('usually print the same number', () => {
    expect(fizzbuzz(1)).toEqual("1");
    expect(fizzbuzz(2)).toEqual("2");
    expect(fizzbuzz(4)).toEqual("4");
});

test('divisible by only 3', () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
    expect(fizzbuzz(6)).toEqual("Fizz");
});

test('divisible by only 5', () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
    expect(fizzbuzz(10)).toEqual("Buzz");
});

test('divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
    expect(fizzbuzz(30)).toEqual("FizzBuzz");
});