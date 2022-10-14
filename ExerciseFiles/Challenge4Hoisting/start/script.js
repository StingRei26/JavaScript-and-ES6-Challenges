/* CHALLENGE 4 - Hoisting

Change code to fix first error after the line 15.
Error after the line 20 should still be generated.
*/

"use strict";

var a = 5,
  b = 10;

if (b > a) {
  var c = 2;
  c = a + b + c;
  console.log(c);
  // BEFORE: Uncaught ReferenceError: c is not defined
  // AFTER: 17
}

// c needs to be var do to the block scope / let will only work in the if statement
console.log(c);
// Uncaught ReferenceError: c is not defined
