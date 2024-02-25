
const _ = require('lodash');
const math = require('./math');

const numbers = [1, 2, 3, 4, 5];

const sum = math.add(5, 10);
console.log(`Sum: ${sum}`);

const product = math.multiply(5, 10);
console.log(`Product: ${product}`);


const total = _.sum(numbers);
console.log(`Total Sum with Lodash: ${total}`);
