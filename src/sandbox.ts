let greet = () => {
    console.log("Hello, Good Morning");
}

let greetAgain: Function;

// greetAgain = "hello"

greetAgain= () => {
    console.log("Hello, Again")
}

const add = ( a: number, b: number, c: number | string ) => {
    console.log(a+b);
    console.log(c);
}

add(5, 10, 20)


const minus = (a: number, b: number): number => { // this function can only return number and it can't be change further
    return (a-b);
}

console.log(minus(15, 10));

//  function with return type void
const welcome = (name: string) : void => {
    console.log(`Welcome ${name}`);
}

welcome("Danyal")