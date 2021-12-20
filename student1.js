const student = require('./details.js');
const prompt = require('prompt-sync')();
const readline = require("readline-sync");
const no = prompt('enter the number of students ');
for (let i = 0; i < no; i++) {
const ob1 = new student();
const name = prompt('Enter your name ');
const regno = prompt('Enter your regno ');
const sub = prompt('Enter the department name ');
console.log("enter marks of each subject ");
let number = [];
for (let i = 0; i < 5; ++i) {
number.push(Number(readline.question()));
}
const total = ob1.printdetails(name,regno,sub,number);
console.log("total marks "+total);
const grade = ob1.printgrade(total);
console.log("grade " +grade);
console.log('\n');
}
