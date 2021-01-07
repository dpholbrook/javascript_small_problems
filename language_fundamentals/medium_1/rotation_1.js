// Rotation Part 1
// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

/*
input: array
output: array, or undefined

rules:
  - input
    - can be empty array
    - elements can be numbers, objects, strings, or arrays
  
  - if input is not an array, then return undefined
  - if input is empty array, return empty array

  - move first element to end of array
  - don't modify original array

questions:
  - what about no input at all?

algorithm:
  - make copy of the input array
  - remove first element from copy array and push it to the end of the array
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  arrayCopy = array.slice();
  arrayCopy.push(arrayCopy.shift());
  console.log(array);
  return arrayCopy;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
console.log(rotateArray());                         // undefined
console.log(rotateArray('t'));                      // undefined
console.log(rotateArray({name: 'object'}));         // undefined



// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]