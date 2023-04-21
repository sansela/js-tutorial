// Advance Array Methods

// functions 
// functions- types of declaration
// Arrow functions
// Order of calling normal functions vs Arrow functions
// for each loop - types
// find() - Returns single value
// filter() - Returns an Array
// every()
// some()
// map()
// reduce()


// console.log(multiply(5, 20)); Works
// console.log(result(20, 30)); Error. It should be below the declaration.

function multiply(a, b) {
    return a*b;
}

const result = function(a, b) {
    return a*b;
}

const resultArrow = (a, b) => {
    return a*b;
}

// console.log(multiply(5, 2));
// console.log(result(5, 20));
// console.log(result(20, 30));

const arr = [2,3,4,5,6];
let total =0;

// for(let sum of arr) {
//     total += sum;
// }

// console.log(total);

arr.forEach((value, index) => {
    console.log(value*10);
});

const isGt7 = arr.find((value, index) => {
    // console.log("ntime");
    return value < 3;
});

// console.log(isGt7); //Returns single value 2

const filterResult = arr.filter((value, index) => {
    return value > 4;
});

// console.log(filterResult); //Returns [5, 6]

const mapResult = arr.map((value, index) => {
    return value* 10;
});

// console.log(mapResult); Returns an Array

const everyResult = arr.every((value, index) => {
    return value >=2;
});

// console.log(everyResult); //Returns boolean. If every element satisfies the condition it returns true otherwise false

const someResult = arr.some((value, index) => {
    return value > 6;
});

// console.log(someResult); //Returns boolean. 

const reduceResult = arr.reduce((previousValue, currentValue, currentIndex) => {
    // console.log(previousValue);
    // console.log(currentValue);
    // console.log(currentIndex);
    // console.log("-------------");
    return previousValue+currentValue;
});

console.log(reduceResult);

