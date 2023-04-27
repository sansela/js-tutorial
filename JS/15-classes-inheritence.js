//class - Creating class.
//class - Calling syntax is same for Factory function and class.
//class - Assigning class to a var. with/without name.
//class - constructor.
//class - print the values passed.
//class - set props from outside.
//class - declare private vars.
//class - declare private functions.
//class - setters & gettrs.
//class - set values thruough setters without using () notation.
//class - get values through getter without using () notation.
//class - Electronics class with 3 prop constructor and private vars.
//class - Extend Electronics class with Charger with portType prop.
//class - Extend the class with HardDisk with rpm prop.
//class - call print method from super class. print form child class for extra prop.
//class - try to access super class vars. If private can't. if public can.

// class MyClass {
//     fName = "senkar";
//     lName = "sala";    
// }

// const SomeClass = class MyClass {
//     constructor(fName, lName) {
//         this.fName = fName;
//         this.lName = lName;
//     }
//     // setfName(fName) {
//     //     this.fName = fName;
//     // }
//     set setfName(fName) {
//         this.fName = fName;
//     }
//     // setlName(lName) {
//     //     this.lName = lName;
//     // }
//     set setlName(lName) {
//         this.lName = lName;
//     }
//     get getfName() {
//         return this.fName;
//     }
//     get getlName() {
//         return this.lName;
//     }
//     print() {
//         console.log(this.fName);
//         console.log(this.lName);
//     }
// }

// function MyClass(fName, lName) {
//     this.fName = fName;
//     this.lName = lName;
//     print: ()=> {
//         console.log(this.fName);
//         console.log(this.lName);
//     }
// }
// myClass = new MyClass();
// console.log(myClass.fName);

// const myClass = new SomeClass("senkar", "sala");
// console.log(myClass);
// myClass.setfName("santhosh");
// myClass.setfName = "santosh";
// myClass.setlName = "sela";
// myClass.print();
// console.log(myClass.getfName);
// console.log(myClass.getlName);

// class PrivateClass {
//     #input;
//     #output;
    
//     constructor(input, output) {
//         this.#input = input;
//         this.#output = output;
//     }

//     print() {
//         console.log(this.#input);
//         console.log(this.#output);
//     }
// }

// const privateClass = new PrivateClass(20, 80);
// privateClass.print();
// console.log(privateClass.input); Not accessible

class Electronics {
    #input;
    #output;
    #name;
    constructor(input, output, name) {
        this.#input = input;
        this.#output = output;
        this.#name = name;
    }

    print() {
        console.log(this.#input);
        console.log(this.#output);
        console.log(this.#name);
    }
}

const electronics = new Electronics(20, 80, "Motor");
electronics.print();

class Charger extends Electronics {
    #type
    constructor(input, output, name, type) {
        super(input, output, name);
        this.#type = type;
    }
    printCharger() {
        // console.log(this.#input); Superclass private var cannot be accessed in subclass
        console.log(this.#type);
    }
}

const samSung = new Charger(10, 30, "Phone", "Samsung");
const iphone = new Charger(10, 30, "Phone", "Iphone");

samSung.print();
samSung.printCharger();

iphone.print();
iphone.printCharger();


