// classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor  (c:string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format () {
        return `${this.client} owes ₹${this.amount} for ${this.details}`
    }
}

const invoOne = new Invoice("Jhon", "Grocery", 1425);
const invoTwo = new Invoice("Clara", "Books", 900);

let invoices : Invoice[] = [];

invoices.push(invoOne);
invoices.push(invoTwo);
console.log(invoices)


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