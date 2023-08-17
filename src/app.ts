// interface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string) : void;
    spent(x: number) : number;
}

const me : IsPerson = {
    name: "Danyal",
    age: 22,
    speak(text: string): void {
        console.log(text)
    },
    spent(amount: number) : number {
        console.log(`${this.name} spend ${amount}`);
        return amount;
    }
}

const greetPerson = (person: IsPerson) => {
    console.log("Hello", person.name);
}

greetPerson(me);


import {Invoice} from './classes/Invoice.js'

const invoOne = new Invoice("Jhon", "Grocery", 1425);
const invoTwo = new Invoice("Clara", "Books", 900);

let invoices : Invoice[] = [];

invoices.push(invoOne);
invoices.push(invoTwo);


invoices.forEach(i => {
    console.log(i.client, i.amount, i.format())
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})