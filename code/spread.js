"use strict";

//add number to beginning of array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNumbers = [
  0, ...numbers
  // this include all the items inside the numbers array
  // without the enclosing array.
];



//add number to end of array
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNumbers2 = [
  ...numbers2, 10
  // this include all the items inside the numbers array
  // without the enclosing array.
];

console.log(newNumbers);
console.log(newNumbers2);