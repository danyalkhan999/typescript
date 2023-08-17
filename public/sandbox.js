"use strict";
let greet = () => {
    console.log("Hello, Good Morning");
};
let greetAgain;
// greetAgain = "hello"
greetAgain = () => {
    console.log("Hello, Again");
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
const minus = (a, b) => {
    return (a - b);
};
console.log(minus(15, 10));
//  function with return type void
const welcome = (name) => {
    console.log(`Welcome ${name}`);
};
welcome("Danyal");
