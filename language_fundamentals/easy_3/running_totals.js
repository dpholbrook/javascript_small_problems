// Running Totals
// Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.
// 
// Examples:
// 
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
//
// input: array of numbers
// output: array of numbers
//
// rules:
//  - each number in the output array is the sum of the elements up to that point
//
// algorithm:
//  - initialize total variable to 0
//  - inintialize result array
//  - loop through array 
//    - increment total by current element
//    - assign total to current index
//  - return result

// function runningTotal(array) {
//   var total = 0;
//   var result = [];
//   var i;
// 
//   for (i = 0; i < array.length; i += 1) {
//     total += array[i];
//     result[i] = total;
//   };
// 
//   return result;
// }

function runningTotal(array) {
  var total = 0;

  var result = array.map( (e) => total += e ); 

  return result;
}











