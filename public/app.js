import { Invoice } from "./classes/Invoice.js";
import { Payments } from "./classes/Payments.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Groot", "Fruits", 549);
// docTwo = new Payments("Daniel", "Plumbing", 2199);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// const invoOne = new Invoice("Jhon", "Grocery", 1425);
// const invoTwo = new Invoice("Clara", "Books", 900);
// let invoices: Invoice[] = [];
// invoices.push(invoOne);
// invoices.push(invoTwo);
// invoices.forEach((i) => {
//   console.log(i.client, i.amount, i.format());
// });
const form = document.querySelector(".new-item-form");
// console.log(form.children);
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
