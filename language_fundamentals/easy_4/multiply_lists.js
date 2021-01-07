// Multiply Lists
// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.
// 
// Example:
// 
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
//
// input: two arrays
// output: one array
//
// rules:
//  - new elements are products of elements from two arrays 
//  - return array with same number of elements
//  - arrays have numbers and same number of elements
//
// algorithm:
//  - iterate through first array, multiplying each element from both arrays
//  - product is new element in new array
//  - return new array
//
function multiplyList(arr1, arr2) {
  return arr1.map((e, idx) => e * arr2[idx]);
}