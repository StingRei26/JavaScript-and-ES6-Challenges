/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z fields of the passed object.
*/

"use strict";

var obj = {
  x: 5,
  y: 20,
  r: 3
};

// Write mult() function here

// option 1
function mult(object) {
  var {x, y, r} = object; 
  return x * y * r;
}

// option 2
function mult({x, y, r}) { 
  return x * y * r;
}


console.log(mult(obj));
// 300
