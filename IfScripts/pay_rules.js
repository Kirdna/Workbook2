"use strict";

var hoursWorked = 45;
var basePayRate = 17.30;


var grossPay;


if (hoursWorked <= 40){
    grossPay = hoursWorked * basePayRate;
}

if (hoursWorked > 40){
    grossPay = (basePayRate * 40) + ((basePayRate * 1.5) * (hoursWorked - 40));
}

console.log("The hours worked is  " + hoursWorked);
console.log("The base pay rate is  " + basePayRate);
console.log("The gross pay rate is  " + grossPay);