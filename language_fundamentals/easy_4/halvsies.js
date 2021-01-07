// Halvsies
// Write a function that takes an array as an argument, and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.
// 
// Examples:
// 
// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]
//
// input: array
// output: an array with two array elements
//
// rules:
//  - put first half of elements in first array
//  - put second half of elements in second array
//  - if odd number, put middle element in first array
//  - if only one element, second array is empty
//  - if empty array, then two empty arrays
//
// algorithm:
//  - first half is Math.round(array.length / 2)
//  - array.slice(0, FIRST_HALF)
//  - second half is array.slice(FIRST_HALF, array.length)

function halvsies(array) {
  const FIRST_HALF = Math.round(array.length / 2);
  return [array.slice(0, FIRST_HALF), array.slice(FIRST_HALF, array.length)]; 
}


