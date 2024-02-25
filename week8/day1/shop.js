

const products = require('./products.js');

function findProductByName(productName) {
    const product = products.find(p => p.name === productName);
    return product;
}

console.log(findProductByName("Computer"));
console.log(findProductByName("Iphone"));
console.log(findProductByName("Shirt"));

