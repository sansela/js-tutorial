//Primitive datatypes, objects
//Pass by value, pass by reference
//Factory function
//Constructor
//Separate copy of obj - constructor
//print constructor

// const boi = {
//     name: "Mr.Boi",
//     age: 26
// }
// const primitiveBoi = "boi";

// console.log(boi);
// console.log(primitiveBoi);

// boi.sigma = "Starship";
// primitiveBoi.sigma = "hashship";

// console.log(boi.sigma);
// console.log(primitiveBoi.sigma); //undefined

//normal - fucntion

// const curtAngle = {
//     height: 255,
//     weight: 255,
//     quote: () => {
//         console.log("One life one win!");
//     }
// }

// console.log(curtAngle);
// console.log(curtAngle.quote);
// curtAngle.quote();

//Template- Factory function

// function champion(height, weight, quote) {
//     return new Object({
//         height: height,
//         weight: weight,
//         quote: quote
//     })
// }

// const curtAngle = champion(155, 166, "This is the Rhythm of my Life!");
// const bhimbhisara = champion(144, 165, "Bimbi the sara");

// console.log(curtAngle.constructor);
// console.log(curtAngle);
// console.log(bhimbhisara);

// function Champion(height, weight, quote) {
    
//     this.height = height;
//     this.weight = weight;
//     this.quote = quote;
// }

// const Rhynno = new Champion(22,22, "Hello");
// console.log(Rhynno.height);
// Rhynno.bloodGrp = "O+";
// console.log(Rhynno);
// console.log(Rhynno.constructor);

// const Rhynno2 = new Champion(33,33, "How are you?");
// console.log(Rhynno2);

//pass by value for primitives * pass by reference for objects
// let a = 20;
// let b =a;

// console.log(a);
// console.log(b);

// b=22;
// console.log(a);
// console.log(b);

// const person = () => {
//     return {
//         name: "santosh",
//         bloodGrp: "O+"
//     }
// }

// let person1 = person();
// let person2 = person1;

// console.log(person1);
// console.log(person2);

// person1.quote = "kumar";

// console.log(person1);
// console.log(person2);

//Spread Operator

// const arr1 = new Array(1,2,3);
// const arr2 = new Array(...arr1, 5,6);

// console.log(arr1);
// console.log(arr1.constructor);

// console.log(arr2);
// console.log(arr2.constructor);

// const arr3 = [1, 2, 3];
// const arr4 = [...arr3, 4, 5, 6];

// console.log(arr3);
// console.log(arr3.constructor);

// console.log(arr4);
// console.log(arr4.constructor);

// const obj1 = {
//     name: "senkar",
//     age: "30"
// }

// const obj2 = {
//     ...obj1,
//     hobbies: ["farming", "gardening"]
// }

// console.log(obj1);
// console.log(obj2);
// console.log(obj2.constructor);

