"use strict";

var hoursWorked = 45;
var basePayRate = 17.30;

var grossPayWeekly;

if (hoursWorked <= 40){
    grossPayWeekly = hoursWorked * basePayRate;
}

if (hoursWorked > 40){
    grossPayWeekly = (basePayRate * 40) + ((basePayRate * 1.5) * (hoursWorked - 40));
}

var grossPayMonthly = grossPayWeekly * 4.35;
var grossPayYearly = grossPayMonthly * 12;

var single;
var joint;

if (single){ grossPayYearly <= 12000
    single = grossPayYearly * 0.05;
}else if(grossPayYearly <= 25000){
    single = grossPayYearly * 0.10;
}else if(grossPayYearly <= 75000){
    single = grossPayYearly * 0.15;
}else if(grossPayYearly > 75000){
    single = grossPayYearly * 0.20;
}


if (joint){ grossPayYearly <= 12000
    joint = grossPayYearly;
}else if(grossPayYearly <= 25000){
    joint = grossPayYearly * .06;
}else if(grossPayYearly <= 75000){
    joint = grossPayYearly * 0.11;
}else if(grossPayYearly > 75000){
    joint = grossPayYearly * 0.20;
}

console.log("The hours worked is $" + hoursWorked);
console.log("The gross pay rate weekly is $" + grossPayWeekly);
console.log("The gross pay rate monthly is $" + grossPayMonthly.toFixed(2));
console.log("The gross pay rate yearly is $" + grossPayYearly);

//console.log("Your yearly tax rate is $" + single);
console.log("Your yearly tax rate is $" + joint.toFixed(2));