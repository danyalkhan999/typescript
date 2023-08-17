"use strict";
// let greet: Function;
// example 1
let greet;
greet = (name, msg) => {
    console.log(`${name} says ${msg}`);
};
// example 2
let cal;
cal = (numOne, numTwo, action) => {
    if (action == "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} has age ${ninja.age}`);
};
