//create Promise()
// Promise will be resolved or rejected.
// .then(resolvecase, reject case)
// or .then(resolve case).catch(error)
//finally will execute whether the promise is resolved or rejected.
//.then().catch().finally()

const promiseDemo = () => {
    return new Promise((resolve, reject) => {
        // resolve("The promise is full filled");
        reject("Promise got rejected");
    });
}
//error can be a second param. or can be caught in catch block.

// promiseDemo()
// .then((param) => {
//     console.log(param);
// }, (error) => {
//     console.log(error);
// })

//reject in catch block
// promiseDemo()
// .then((resolve) => {
//     console.log(resolve);
// })
// .catch((error) => {
//     console.log(error)
// });

//finally will always execute. Multiple then can be there
promiseDemo().
then(param => console.log(param))
.then(() => console.log("console log 2"))
.then(() => console.log("console log 3"))
.then(() => console.log("console log 4"), (error) => console.log(error))
.then(() => console.log("console log 5"))
.catch(error => console.log(error))
.finally(() => console.log("finally will always execute"));
