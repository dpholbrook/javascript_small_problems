// Create a function that can create an object with a given object as its prototype, without using Object.create.

// copy the object properties to the new object
// set object as prototype

// function createObject(obj) {
//   let result = {};
//   Object.setPrototypeOf(result, obj);
//   return result;
// }

// use a constructor function with obj as its prototype to create and return new object

function createObject(obj) {
  let Create = function() {}
  Create.prototype = obj;
  return new Create();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true
console.log(foo.a);
console.log(bar.a);