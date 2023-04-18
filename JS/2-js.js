// type conversion - Number to String and String to Number
let a = 50;
console.log(a);
console.log(typeof a);

console.log(typeof String(50));
console.log(typeof a);
a = a.toString();
console.log(typeof a);

let b="50";
console.log(typeof b);
console.log(typeof Number(b));

// Array -methods
let name = "my name is Santosh Sela";
// character at a specific position.
console.log(name[1]);
// length
console.log(name.length);
// charAt
console.log(name.charAt(0));
// slice- Last position not included
console.log(name.slice(0,6));
// subString vs subStr
console.log(name.substring(0,6)); //from postion to to position
console.log(name.substr(0,6)); // from position to length
console.log(name.substr(1,6));
// includes
console.log(name.includes("is")); //true
console.log(name.includes("i s")); //false
// split
console.log(name.split(" ")); //returns array
//toLowerCase and toUpperCase
console.log(name.toLowerCase());
console.log(name.toUpperCase());
// DOM manipulatation - Text, color, backgorund color

let heading = document.getElementById("myHeading");
console.log(heading);
heading.innerHTML= name;
heading.style.backgroundColor = "red";
heading.style.color="white";