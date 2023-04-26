"use strict";

var currentTime = 20;
var greeting;

  if (currentTime > 17) {
    greeting = 'Good evening!';
  } else if (currentTime > 10) {
    greeting = 'Good day!';
  } else if (currentTime > 0) {
    greeting = 'Good morning!';
  }

  console.log(greeting);
