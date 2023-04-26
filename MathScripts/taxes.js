"use strict";
var taxRate = 0.23;
var salary = 50000;

var withheld = salary * taxRate;
var check = salary - withheld;

console.log("You made $" + salary);
console.log("So here is your check for $" + check);

