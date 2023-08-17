"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ₹${this.amount} for ${this.details}`;
    }
}
const invoOne = new Invoice("Jhon", "Grocery", 1425);
const invoTwo = new Invoice("Clara", "Books", 900);
let invoices = [];
invoices.push(invoOne);
invoices.push(invoTwo);
console.log(invoices);
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
