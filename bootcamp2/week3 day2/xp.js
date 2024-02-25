let favoriteFood = "Hamburger";
let favoriteMeal = "dinner";

console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);

//ex2;
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;

console.log(
  `I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`
);

//part 2;

//const myWatchedSeries = [ "Malcolm ","black mirror", "money heist", "the big bang theory","Desperate Housewife"];


myWatchedSeries[2] = "friends";
myWatchedSeries.push("Desperate Housewife");
myWatchedSeries.unshift("Malcolm");
myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"), 1);

console.log(myWatchedSeries[1].charAt(2));
console.log(myWatchedSeries);

console.log(myWatchedSeries[1].charAt(2));
console.log(myWatchedSeries);

//ex3

let celsiusTemperature = 25; 


let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;


console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);

//ex4


let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: This will output 55 because a is 34 and b is 21, and their sum is 55.
// Actual: 

a = 2;

console.log(a+b) //second expression
// Prediction: This will output 23 because now a is 2 and b is still 21, and their sum is 23.
// Actual: 

// What is the value of c?
// c is undefined because it was declared but never initialized

console.log(3 + 4 + '5');
// Prediction: This will output "75". JavaScript executes left to right, so it first adds 3 and 4 to get 7, then concatenates the string '5', resulting in '75'.
// Actual: 

//ex6
5 + "34"
// Prediction:534
// Actual:number

5 - "4"
// Prediction:1
// Actual:

10 % 5
// Prediction:0
// Actual:

5 % 10
// Prediction:5
// Actual:

"Java" + "Script"
// Prediction:"JavaScript"
// Actual:

" " + " "
// Prediction:"  "
// Actual:

" " + 0
// Prediction:"0"
// Actual:

true + true
// Prediction:2 because JavaScript converts boolean true to 1 for arithmetic operations
// Actual:

true + false
// Prediction:1 because true is converted to 1, and false is converted to 0.
// Actual:

false + true
// Prediction:1
// Actual:

false - true
// Prediction:-1
// Actual:

!true
// Prediction:
// Actual:

3 - 4
// Prediction:-1
// Actual:

"Bob" - "bill"
// Prediction:NaN
// Actual:

//ex5
typeof(15)
// Prediction:NUMBER
// Actual:

typeof(5.5)
// Prediction:NUMBER
// Actual:

typeof(NaN)
// Prediction:
// Actual:

typeof("hello")
// Prediction:STRING
// Actual:

typeof(true)
// Prediction:BOOLEAN
// Actual:

typeof(1 != 2)
// Prediction:BOOLEAN 
// Actual:

"hamburger" + "s"
// Prediction:HAMBURGER
// Actual:

"hamburgers" - "s"
// Prediction:NAN
// Actual:

"1" + "3"
// Prediction:13
// Actual:

"1" - "3"
// Prediction:-2
// Actual:

"johnny" + 5
// Prediction:NAN
// Actual:

"johnny" - 5
// Prediction:NAN
// Actual:

99 * "hello"
// Prediction:NAN
// Actual:

1 != 1
// Prediction:FALSE
// Actual:

1 == "1"
// Prediction: TRUE
// Actual:

1 === "1"
// Prediction:FALSE
// Actual: