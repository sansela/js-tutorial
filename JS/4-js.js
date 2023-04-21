//Arrays - Homogeneous Hetrogeneous

//Arrays- Types of decalaring

//Arrays- Ways of Inserting elements

// Arrays- push, pop, shift, unshift, splash, slice, includes

//Arrays- loops

//const array - manipulating the data.

//Arrays vs objects - accessing data in arrays vs objs

//Arrays - Homogeneous Hetrogeneous
let arr = [10,20,30,44]
console.log(arr);

let arrHetro = [10, 20, "Santosh", 44];
console.log(arrHetro);

let arr2 = [];
arr2[0] = 54; //Position 1 is Empty
arr2[2] = 77;
console.log(arr2);

//Arrays- Types of decalaring
const arrConstructor = new Array();
arrConstructor[0]=0;
arrConstructor[1]=1;
console.log(arrConstructor);

const arrConstructor2 = new Array(6); //Array size is 6
console.log(arrConstructor2.length);

const arrConstructor3 = new Array(1, 2, 3);
console.log(arrConstructor3);

//Arrays- Ways of Inserting elements
let arrInsert = [];
arrInsert[0] = 99;
arrInsert[1] = 98;
arrInsert.push(97);
console.log(arrInsert);

// Arrays- push, pop, shift, unshift, splice, slice, includes, reverse
let arrMethods = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arrMethods.push(11);
console.log(arrMethods);

arrMethods.pop();
console.log(arrMethods);

// arrMethods.shift();
// console.log(arrMethods); //0 index is at element 2

// arrMethods.unshift(-1,0);
// console.log(arrMethods); //-1, 0 at index 0 and 1

// arrMethods.splice(1, 2); //removes elements (index, length)
// console.log(arrMethods);

let arrSlice = arrMethods.slice(1, 3); //This won't remove in origniala array. Just returns a new array. (fromIndex, toIndex). toInxex excluded
console.log(arrMethods);
console.log(arrSlice);

console.log(arrMethods.includes(10));//true
console.log(arrMethods.includes(11));//false
console.log(arrMethods.reverse()); //preservs the reverse order in original array.
console.log(arrMethods);

//Arrays- loops
// let loopArray = [];
// for(i=0; i<100; i++) {
//     loopArray.push("Santosh");
// }
// console.log(loopArray);

const arrConst = [1, 2];
arrConst.push(3);
console.log(arrConst);

// arrConst = 2; ERROR: caught TypeError: Assignment to constant variable.
// console.log(arrConst);

//Arrays vs objects - accessing data in arrays vs objs: The diff is arrays are index based, objs are key value pair based
const obj1 = {
    fname: "santosh",
    lname: "sala",
    salary: "400k",
    location: "USA"
}

console.log(obj1);
obj1.profession = "Software Engineer";
console.log(obj1);
console.log(obj1.salary);
