const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//ex2
function displayStudentInfo(objUser){
    //destructuring
}

displayStudentInfo({first: 'Elie', last:'Schoppik'})


function displayStudentInfo(objUser){
    
    const { first, last } = objUser;


    return `Your full name is ${first} ${last}`;
}

const output = displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(output); 

//ex3

const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);


const modifiedUsersArray = usersArray.map(([key, value]) => [key, value * 2]);

console.log(usersArray); 
console.log(modifiedUsersArray); 

// ex4

object

//ex5

class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
 The Option 2 in the provided list correctly extends the Dog class with a Labrador subclass.

 //ex6 //
  
 [2] === [2] false
 {} === {} false
 
 //ex6

 const object1 = { number: 5 }; =5
const object2 = object1; =4
const object3 = object2; =4
const object4 = { number: 5};=4

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1 is an object whose number property is initially set to 5 and then changed to 4. 
This change also affects object2 and object3, as they are references to the same object.

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  class Mamal extends Animal {
    sound(sound) {
      return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
  }
  
  const farmerCow = new Mamal("Lily", "cow", "brown and white");
  console.log(farmerCow.sound("Moooo"));
  





