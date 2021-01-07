// Grocery List
// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.
// 
// Example:
// 
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]
//
// input: array of arrays
// output: flat array
//
// rules:
//  - transform each element to string times number
//    - build string by looping number times
//
function buyFruit(array) {
  return array.map(subArray => {
    return repeat(subArray[0], subArray[1]);
  })
              .reduce((acc, value) => acc.concat(value));
}

function repeat(string, times) {
  result = [];

  for (let i = 0; i < times; i += 1) {
    result.push(string);
  }

  return result;
}
