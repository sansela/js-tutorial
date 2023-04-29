//Callback functions - function which is passed as an argument to another function.
//Callback hell - multiple call backs creates havoc. Solution is promises

const arr = [1, 2, 3, 4, 5];

calculate = (callback) => {
   const calc = [];
  for(i=0; i< arr.length; i++) {
    calc.push(callback(arr[i]));
  }
  console.log(calc);

}

// function multiply(a) {
//     return a*10;
// }

// function divide(a) {
//     return a/10;
// }

// calculate(multiply);
// calculate(divide);
calculate(a => a*10);
calculate(a => a/10);