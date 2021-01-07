// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output:

// method returns array of all ancestors

// create array 
// prototype is Object.getPrototypeOf(prototype)
// if prototype is Object.prototype then push 'Object.prototype' to array
// otherwise push prototype.name to array
// do this until prototype is null

// Object.prototype.ancestors = function() {
//   let result = [];
//   let prototype = Object.getPrototypeOf(this);

//   while (prototype !== null) {
//     result.push(prototype.name || 'Object.prototype');
//     prototype = Object.getPrototypeOf(prototype);
//   }

//   return result;
// }

// recursive
// get the prototype of the calling object and add it to array
// if prototype is null then return

Object.prototype.ancestors = function() {
  let prototype = Object.getPrototypeOf(this);

  if (prototype === Object.prototype) {
    return ['Object.prototype'];
  } 
  
  return [prototype.name].concat(prototype.ancestors());
}

// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']