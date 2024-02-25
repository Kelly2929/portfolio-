function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve('Resolved: Number is less than or equal to 10');
      } else {
        reject('Rejected: Number is greater than 10');
      }
    });
  }

  compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

    // ex2
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("success");
        }, 4000);
      });
      
      promise.then(result => console.log(result)); 

      //ex3

      let resolvedPromise = Promise.resolve(3);

resolvedPromise.then(result => console.log(result)); 


//ex4

let rejectedPromise = Promise.reject("Boo!");

rejectedPromise.catch(error => console.log(error)); 