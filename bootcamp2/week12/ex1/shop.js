const products = require('./products');

function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  return product;
}


const productNames = ['Laptop', 'Coffee Mug', 'Book'];

productNames.forEach(productName => {
  const product = findProductByName(productName);
  if (product) {
    console.log(`Found: ${product.name}, Price: $${product.price}, Category: ${product.category}`);
  } else {
    console.log(`Product with name ${productName} not found.`);
  }
});
