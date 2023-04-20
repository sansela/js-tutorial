// Operators - + - * / %
console.log(101%2);
// ++ --
let a = 10;
console.log(a); //10
console.log(a++); //10
console.log(a); //11
console.log(a--); //11
console.log(a); //10
console.log(--a); //9

// < <= > >= == ===
let b=10;
if(b == 10) {
    console.log("Equals to");
}
if(b == "10") {
    console.log("Equal to");
}
if(b === 10) {
    console.log("Strictly Equals to");
}
if(b === "10") {
    console.log("Type Diff");
}
//Conditions - If If-Else Switch
let iceCream = prompt("Enter the cost of the Ice cream");
if(Number(iceCream) === 10) {
    console.log("Blue Lagoon Icecream")
} else if(Number(iceCream) === 20) {
    console.log("Cone Ice cream")
} else {
    console.log("Default Ice cream")
}

switch(Number(iceCream)) {
    case 10:
            console.log("Blue Lagoon Switch");
            break;
    case 20:
            console.log("Cone switch");
            break;
    default:
            console.log("Default case");
            break;
}
//without -break - all cases will be executed
switch(iceCream) {
    case 10:
            console.log("Blue Lagoon Switch");
    case 20:
            console.log("Cone switch");
    default:
            console.log("Default swith case");
}

//Loops - for while do-while

for(i=0; i<10; i++) {
    console.log("Demo for loop");
}

for(i=0; i<10; i=i+2) {
    console.log("Demo for loop 2 times fast");
}

let c = 20;
while(c > 0) {
    console.log("Demo for while loop");
    c--;
}
