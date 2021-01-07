// Array Average
// Write a function that takes one argument, an array containing integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.
// 
// Examples:
// 
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
//
// input: array of positive integers
// output: integer that is the average of input array integers
//
// rules: 
//  - round down for result
//
// alorithm:
//  - sum the numbers in the array and divide by array length
//  - round down and return result
//
function average(array) {
  let sum = array.reduce((acc, value) => acc + value);
  let average = sum / array.length;
  return Math.floor(average);
}
