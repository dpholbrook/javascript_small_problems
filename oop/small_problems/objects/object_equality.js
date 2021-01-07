// Testing Object Equality
// In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates to true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.

/*
input: two objects
output: boolean

rules:
  - return true if objects have the same key value pairs
  - objects can have different lengths
  - objects can be empty
  - objects can have undefined value

  make sure objects have the same number of keys 
    - compare lengths of object keys and return false if they are not the same

  make sure objects have the same keys
    - sort object keys for both objects and compare each element for equality
      - if any are not equal, reutrn false

  use compare values from each object with obj 1 keys
    - if any are different return false

  compare values from each obejct with obj2 keys
    - if any are different reutnr false


compare lengths of object keys
if they are not equal, then return false
iterate through object keys
if all values of obj2 equal all values of obj1 then return true
otherwise return false
*/ 

function objectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1).sort();
  let keys2 = Object.keys(obj2).sort();

  function lengthsMatch() {
    return  keys1.length === keys2.length;
  }

  function keysMatch() {
    return keys1.every((key, idx) => {
      return key === keys2[idx];
    });
  }

  function valuesMatch() {
    for (let index = 0; index < keys1; index += 1) {
      let key = keys1[index];
      let value1 = obj1[key];
      let value2 = obj2[key];
  
      if (value1 !== value2) {
        return false;
      }
    }
  
    return true;
  };
  
  if (lengthsMatch() && keysMatch() && valuesMatch()) {
    return true;
  } 
    
  return false;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: undefined}));  // false
