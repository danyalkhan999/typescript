var names = ["Batman", "Flash", "Aquaman"]; // only string
// names.push(34);
names.push("Superman");
// names[1] = 25;
var numbers = [12, 22, 34, 45]; // only numbers
numbers.push(11);
// numbers.push("abc");
// numbers[0] = "abc";
var mixed = ["Batman", 22, 34, "Flash", true]; // it takes the data-type of when variable is declared, can't change data-type after declaration
mixed.push("ABc");
mixed.push(25);
mixed.push(false);
// objects
var ninja = {
    name: "Groot",
    belt: "white",
    age: 17
    // we can't change the data-type of these variables
    // once we define the object we can't add new properties into it
};
ninja.name = "Thor";
ninja.age = 1500;
// ninja.belt = 25
// ninja.name = 500
ninja = {
    name: "Flash",
    belt: "orange",
    age: 22
    // if we miss some properties to enter it's check with the initial structure and copmpare and give error
};
