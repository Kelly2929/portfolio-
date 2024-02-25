//ex1

let x = 10;
let y = 2; 

if (x > y) {
    console.log("x is the biggest number");
} else if (y > x) {
    console.log("y is the biggest number");
} else {
    console.log("x and y are equal");
}

//ex2

let newDog = "Chihuahua";

console.log(newDog.length);

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
    console.log("I dont care, I prefer cats");
}
//ex3


let number = prompt("Please enter a number:");


number = parseInt(number) 


if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}
//ex4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0) {
    console.log("no one is online");
} else if (users.length === 1) {
    console.log(`${users[0]} is online`);
} else if (users.length === 2) {
    console.log(`${users[0]} and ${users[1]} are online`);
} else {
    console.log(`${users[0]}, ${users[1]} and ${users.length - 2} more are online`);
}
