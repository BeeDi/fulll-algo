const checkMinimumValue = (number) => {
    if (number < 1) throw new Error('Could not handle this value: minimum value is 1');
};

const fizzFormatter = (number) => {
    return (number % 3 === 0) ? 'Fizz' : '';
};

const buzzFormatter = (number) => {
    return (number % 5 === 0) ? 'Buzz' : '';
};

const fizzbuzzFormatter = (number) => {
        checkMinimumValue(number);
        const fizzbuzzResult = fizzFormatter(number) + buzzFormatter(number);
        return (fizzbuzzResult.length === 0) ? String(number) : fizzbuzzResult;
};

module.exports = fizzbuzzFormatter;