// let greet: Function;

// example 1
let greet : (x: string, y: string) => void;

greet = (name: string, msg:string) => {
    console.log(`${name} says ${msg}`);
}

// example 2
let cal : (a: number, b:number, c: string) => number;

cal = (numOne, numTwo, action) => {
    if(action == "add"){
        return numOne + numTwo;
    }
    else{
        return numOne- numTwo;
    }
}

// example 3
let logDetails : (obj :{name: string , age: number}) => void;

logDetails = ( ninja :{name: string, age:number}) => {
    console.log(`${ninja.name} has age ${ninja.age}`)
}