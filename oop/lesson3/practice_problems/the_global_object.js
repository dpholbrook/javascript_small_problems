// 1
// Without strict mode, the global object is the implicit execution context.
// In strict mode, the global object is not the implict execution context.

// 2
a = 10;
console.log(window.a === a);
// The code logs true.
// Because we are not in strict mode, the global object is the implicit execution context.
// So, when we initialize variable and don't declare it, we are creating a property of the global object (window) which evaluates to 10.

// 3 
// In strict mode, the previous code would raise an error because we have to declare a variable before we initialize it.

// 4
function func() {
  let b = 1;
}

func();

console.log(b);
// This code raises an error because the variable b is not in scope

// 5
function func() {
  b = 1;
}

func();

console.log(b);
// This code will log 1 because initializing a variable without declaring it, when not in strict mode, creates a property of the global object.
// So the global property b is logged

"use strict"

function func() {
  b = 1;
}

func();

console.log(b);

// This raises an ReferenceError because we can not initialize a variable without declaring it in strict mode