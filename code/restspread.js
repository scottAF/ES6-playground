"use strict";

const person = {
  name: "Nick",
  age: 30,
  status: "active"
};

const accountSettings = {
  ... person,
  status: "inactive",
  mood: "chill"
};

console.log(accountSettings);


//responded with error for ... person. source: https://github.com/tc39/proposal-object-rest-spread