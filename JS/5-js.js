//Functions
//Calling functions
//Default values of functions
//Anonymous functions
//Calling anonymous functions
//function to calculate sum of an Array
// let vs var vs const

//Functions
function printValue(a, b, c=0) { //Default values of functions
    console.log(a+b+c);
}

//Calling functions
printValue(10, 20, 30);
printValue(10,20); //NaN c is not 0 in params

//Anonymous functions
const multiply = (a, b, c) => {
    return a*b*c;
}

//Calling anonymous functions
console.log(multiply(2,3,4));

//function to calculate sum of an Array
const sumOfArray = (arr) => {
    let total =0;
    for (i=0; i<arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}

console.log(sumOfArray([10, 20, 44]));

// let vs var vs const
// let: Global var - Accessable in global and local 
//      Local var - only accessable in local
// var: Global var - Accessable in global and local
//      Local var -  Accessable in global and local
// Const: Same as let but you can't reassign value.
let a = 99;
{
    a=98;
    let b= 66;
    console.log("a:"+a);
    console.log("b:"+b);
}
console.log(a);
// console.log(b); ERROR

var c = 22;
{
    var d = 11;
    console.log("c:"+c);
    console.log("d:"+d);
}
console.log("c:"+c);
console.log("d:"+d);

const e = 12;
{
    const f = 13;
    console.log("e:"+e);
    console.log("f:"+f);
}
console.log("e:"+e);
// console.log("f:"+f); ERROR