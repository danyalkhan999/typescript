"use strict";
// const anchor = document.querySelector('a') !; // exclamation mark says that anchor have some value and it's not null
// console.log(anchor.href);
// Method 1 
// if(anchor){
//     console.log(anchor.href); 
// }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
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
