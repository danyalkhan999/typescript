// classes
import { Invoice } from './classes/Invoice.js';
const invoOne = new Invoice("Jhon", "Grocery", 1425);
const invoTwo = new Invoice("Clara", "Books", 900);
let invoices = [];
invoices.push(invoOne);
invoices.push(invoTwo);
invoices.forEach(i => {
    console.log(i.client, i.amount, i.format());
});
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
