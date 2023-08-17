// const anchor = document.querySelector('a') !; // exclamation mark says that anchor have some value and it's not null

// console.log(anchor.href);

// Method 1 
// if(anchor){
//     console.log(anchor.href); 
// }

// console.log(anchor.href);

// const form = document.querySelector('form')!;
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