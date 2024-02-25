//ex1;
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve("num is smaller or equal to 10")
        } else {
            reject("bigger than 10")

        }

    });
}
compareToTen(22).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

// let num = 11;
// new Promise((res, rej) => {
//   if (num <= 10) {
//     res("num is smaller or equal to 10");
//   } else {
//     rej("bigger than 10");
//   }
// }).then((value) => console.log(value)).catch((err)=>{
//     console.log(err)
// })

//ex2

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//       resolve("success");
//     }, 4000);
//   });

//ex3

Promise.reject("Boo!")
  .then(value => {
    console.log( value);
  })
  .catch(error => {
    console.error("error");
    return error;
  });
