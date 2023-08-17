let age: any;

age = 22;
console.log(age)

age = "abc"
console.log(age)

age = true;
console.log(age)

age = {name: "Dinesh", age: 18}
console.log(age)

let mixed: any[] = [];

mixed.push("Ritesh");
mixed.push("1230");
mixed.push(12)
mixed.push(false);
mixed.push({itemName: "Mango", amt: 10, qty: 3, total: 30})
console.log(mixed);

let ninja : {name: any, age: any};

ninja = {name: "Damon", age: 25};

ninja = {name: 52, age: "Damon"}