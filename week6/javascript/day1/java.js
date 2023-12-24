# Exercice 1
const people = ["Greg", "Mary", "Devon", "James"];

const people = ["Greg", "Mary", "Devon", "James"];


const gregIndex = people.indexOf("Greg");
if (gregIndex !== -1) {
    people.splice(gregIndex, 1);
}


const jamesIndex = people.indexOf("James");
if (jamesIndex !== -1) {
    people.splice(jamesIndex, 1, "Jason");
}

console.log(people);

const people = ["Mary", "Devon", "Jason"];


people.push("Kelly");


console.log("Mary's index:", people.indexOf("Mary"));

const peopleCopy = people.slice(1, -1);

console.log(peopleCopy);

const people = ["Mary", "Devon", "Jason"];


people.push("Kelly");


console.log("Mary's index:", people.indexOf("Mary"));

const peopleCopy = people.slice(1, -1);

console.log(peopleCopy);
const people = ["Mary", "Devon", "Jason", "Kelly"];


const peopleCopy = people.slice(1, -1);

console.log(peopleCopy);


const fooIndex = people.indexOf("Foo");
console.log("Index of 'Foo':", fooIndex);
const people = ["Mary", "Devon", "Jason", "Kelly"];

const fooIndex = people.indexOf("Foo");
console.log("Index of 'Foo':", fooIndex); 


const last = people[people.length - 1];
console.log("Last element:", last);

const people = ["Mary", "Devon", "Jason", "Kelly"];

#Part 2:

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}


for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}

#EX2


const colors = ["blue", "red", "green", "yellow", "purple"];

for (let i = 0; i < colors.length; i++) {
    let suffix = "th";
    
    if (i === 0) {
        suffix = "st";
    } else if (i === 1) {
        suffix = "nd";
    } else if (i === 2) {
        suffix = "rd";
    }

    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}
let number;

do {
    number = prompt("Please enter a number:");
    number = Number(number); // Convert the string input to a number
} while (typeof number === "number" && number < 10);
};
#EX4


console.log("Number of floors in the building:", building.numberOfFloors);


console.log("Apartments on first floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on third floor:", building.numberOfAptByFloor.thirdFloor);


const secondTenant = building.nameOfTenants[1];
const roomsOfSecondTenant = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
console.log(`The second tenant is ${secondTenant} and he has ${roomsOfSecondTenant} rooms in his apartment.`);

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};


const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {

    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log("Dan's new rent:", building.numberOfRoomsAndRent.dan[1]);

#EX5
const family = {
    father: "John",
    mother: "Jane",
    son: "Mike",
    daughter: "Emily"
};

for (let key in family) {
    console.log(key);
}
for (let key in family) {
    console.log(family[key]);
}
const family = {
    father: "John",
    mother: "Jane",
    son: "Mike",
    daughter: "Emily"
};


for (let key in family) {
    console.log(key);
}

for (let key in family) {
    console.log(family[key]);
}
#EX6
Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let sentence = "";
  
  for (let key in details) {
      sentence += `${key} ${details[key]} `;
  }
  
  console.log(sentence.trim());

  const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const societyName = names.map(name => name[0]).sort().join('');

console.log("The secret society's name is:", societyName);

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Extract the first letter of each name, sort them, and then join them
const societyName = names.map(name => name[0]).sort().join('');

console.log("The secret society's name is:", societyName); // Output: "ABJKPS"




