const arithmet = require('./arithmetic.js');
let x=50;
let y=20;
/* const prompt = require('prompt-sync');
const x = prompt('Enter value for x : ');
const y = prompt('Enter value for y : '); */
console.log("The value of X is " +x);
console.log("The value of Y is " +y);
console.log("*****ADDITION***** ");
console.log("The addition of two numbers is " + arithmet.add(x,y));
console.log("*****SUBTRACTION***** ");
console.log("The subtraction of two numbers is "+ arithmet.subtract(x,y));
console.log("*****SQUARE*****");
console.log("The square of a number is "+ arithmet.square(x));
