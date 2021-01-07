// Write a function that extends an object (destination object) with contents from multiple objects (source objects).

// takes list of multiple object arguments
// returns object with properties from all of those objects
// for each object
// add all of its properties to result object

function extend(...destinations) {
  let result = {};

  destinations.forEach(obj => {
    for (prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        result[prop] = obj[prop];
      }
    }
  });

  return result;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe

let funcs2 = Object.create(funcs);
funcs2.time = 'The time is now';

for (prop in funcs2) {
  if (Object.prototype.hasOwnProperty.call(funcs2, prop)) {
    console.log(prop);
  }
}