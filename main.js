import { calculateTotalPrice, getFullName, createCounter } from './hw3.js';

const products = [
  { name: 'Phone', price: 800 },
  { name: 'Charger', price: 50 }
];

console.log('Total price:', calculateTotalPrice(products)); // 850

const user = { firstName: 'Stive', lastName: 'Jobs' };
console.log('Full name:', getFullName(user)); // "Stive Jobs"

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
