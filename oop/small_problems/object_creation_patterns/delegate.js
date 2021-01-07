// Delegate
// Write a delegate function that can be used to delegate the behavior of a method or function to another object's method. delegate takes a minimum of two arguments: (1) the object and (2) name of the method on the object. The remaining arguments, if any, are passed — as arguments — to the objects' method that it delegates to.

// Note that this is not the same as using bind. bind returns a new function, whereas delegate maintains the reference.

// delegate returns a function
// when invoked, that function invokes the method that is passed in from the context of the object that is passed in with the args provided

// Here's a sample run;

// function delegate(context, method, ...args) {
//   return function() {
//     // context[method].apply(context, args);
//     context[method](...args);
//   }
// }

// function delegate(obj, methodName, ...args) {
//   return function() {
//     obj[methodName](...args);
//   };
// }

function delegate(obj, method, ...args) {
  return function() {
    return obj[method](...args);
  }
}

// function delegate(context, methodName, ...args) {
//   return () => context[methodName].apply(context, args);
// }

const foo = {
  name: 'test',
  bar(first, second) {
    return first * second;
  },
};

const baz = {
  qux: delegate(foo, 'bar', 7, 3),
};

console.log(baz.qux());   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'



// let logger = function(arg) {
//   console.log(arg);
// }

// let test = {
//   func: logger('hi'),
// }

// test.func;

// function test(first, second) {
//   console.log(first);
//   console.log(second);
// }

// test([1, 2, 3, 4, 5])

