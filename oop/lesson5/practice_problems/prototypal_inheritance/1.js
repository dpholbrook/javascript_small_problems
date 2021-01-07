// Write a function that returns the object on a given object's prototype chain where a property is defined. See the example code below:

function getDefiningObject(object, propKey) {
    while(object && !object.hasOwnProperty(propKey)) {
      object = Object.getPrototypeOf(object);
    }

    return object;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null

/*
if obj does not have access to that prop, return null
if it does, find out where it is
  do this until obj.hasOwnProperty('propKey') returns true
  obj becomes Object.GetPrototypeOf(obj)

  then return obj
*/