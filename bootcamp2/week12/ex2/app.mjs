
import persons from './data.mjs';

const calculateAverageAge = (persons) => {
  const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
  return totalAge / persons.length;
};

const averageAge = calculateAverageAge(persons);
console.log(`The average age is: ${averageAge}`);
