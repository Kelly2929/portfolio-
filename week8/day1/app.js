
import persons from './data.js';

function calculateAverageAge(personArray) {
    let totalAge = 0;
    personArray.forEach(person => {
        totalAge += person.age;
    });
    return totalAge / personArray.length;
}

const averageAge = calculateAverageAge(persons);
console.log(`The average age is ${averageAge}`);
