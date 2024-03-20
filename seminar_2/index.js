require('colors')
const {calculateResultSum} = require('./calculateResultSum')

const total = calculateResultSum([2.1, 2.2, 3.1], 0.9);


const resulText = `общая стоимость покупок ${total} рублей`;
console.log(total > 50 ? resulText.red : resulText.green);