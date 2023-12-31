// EX2
//function winBattle(){
  //  return true;
//}
const winBattle =() =>true
const experiencePoints = winBattle() ? 10 : 1;
console.log (experiencePoints);

//EX3
const isString = (value) => typeof value === 'string';

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false

// EX4
const sum = (num1, num2) => num1 + num2
console.log(sum(5, 7));
//EX5
function kgToGrams(kg) {
    return kg * 1000;
}

console.log(kgToGrams(5)); 

// Function declarations are hoisted and can be invoked before they're defined, while function expressions are not hoisted.
const kgToGramsArrow = kg => kg * 1000;

console.log(kgToGramsArrow(5)); // Outputs: 5000 grams

//EX6
// Self-invoking function
(function(numberOfChildren, partnerName, location, jobTitle) {
    var message = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    console.log(message);
})(2, 'Alex', 'Paris', 'Software Developer'); 

//EX7
const container = document.querySelector("div");
function makejuice(size) {
 const ingredients = [];
function addIngredients(ing1, ing2, ing3) {
ingredients.push(ing1, ing2, ing3);
}
function displayShake() {
 container.innerText = `The client wants a ${size} shake, containing ${ingredients.join(" ,")}`;
  }
addIngredients("banana", "strawbery", "orange");
 addIngredients("Penut butter", "chocolat", "caramel");

displayShake();
}
 ingredients = [];
function displayJuice() {
    const ingredientList = ingredients.join(', ');
    document.getElementById('order').innerText = `The client wants a ${size} juice, containing ${ingredientList}.`;
addIngredients('apple', 'banana', 'carrot');
    addIngredients('ginger', 'tomato', 'spinach');
    displayJuice();
}

makeJuice('large');



