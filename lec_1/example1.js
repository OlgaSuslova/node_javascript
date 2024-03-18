const numArray = [1, 2, 3, 4, 5, 6, 7]
const sum = numArray.reduce((acc, number) => acc += number, 0)
console.log('result is', sum);