const fizzbuzz = require('./fizzbuzz.js');

const displayFizzBuzz = (until = 10) => {
    for (let i = 1; i<=until; i++) {
        console.log(fizzbuzz(i));
    }
};

const args = process.argv;
displayFizzBuzz(args[2]);

module.exports = displayFizzBuzz;