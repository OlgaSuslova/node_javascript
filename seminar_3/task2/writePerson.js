const path = require('path');
const fs = require('fs');

// const person = {
//     name: "Ivan",
//     surname: "Ivanov",
//     age: 30,
//     city: "Moscow"
// }

const jsonPath = path.join(__dirname, 'person.json');
console.log(jsonPath);

const person = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
person.age = 20;
person.city = 'Ekaterinburg';

fs.writeFileSync(jsonPath, JSON.stringify(person));
