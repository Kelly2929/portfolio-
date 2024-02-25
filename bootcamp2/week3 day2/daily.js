//ex1

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];


fruits.shift(); 

fruits.sort(); 

fruits.push("Kiwi"); 

const appleIndex = fruits.indexOf("Apples");
if (appleIndex !== -1) {
    fruits.splice(appleIndex, 1); 
}

fruits.reverse(); 

console.log(fruits);

//ex2

// dont understand