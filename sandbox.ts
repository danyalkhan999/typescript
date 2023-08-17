// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// now we can only intialize these variables with there respective data-types
// character = 123
character = "Mario";

// age = "abc"
age = 23;

// isLoggedIn = "gROOT"
isLoggedIn = false 

// arrays

let arr: string[] = [];

// arr.push(1200)
arr.push("MIAMI");


//  union Datatype
let mixed: (string | number)[] = [];
mixed.push("Krunal");
mixed.push(25);
// mixed.push(false)

// we can also do this union to a normal variable

let eid: (number | string);

eid = "256"
eid = 256
// eid = true;

// objects
let ninjaOne: object;

ninjaOne = {
    name: "ninja",
    age: 12,
    belt: "White"
}

let ninja2 : {
    name: string,
    age: number,
    belt: boolean
}

// ninja2 = {name: "Flash", age: 23, belt: [true, false]}