"use strict";
let num1 = 10;
console.log(num1++); // prints 10, then num1 becomes 11
console.log(num1);
console.log(++num1); // num1 becomes 12, then prints 12
let num2 = 20;
num2 = ++(num2++); // This will cause a syntax error
console.log(num2);
let num3 = 30++ + ++30; // This will also cause a syntax error
console.log(num3);
let num4 = 40;
console.log(num4++ + ++num4); // prints 40 + 42 = 82
