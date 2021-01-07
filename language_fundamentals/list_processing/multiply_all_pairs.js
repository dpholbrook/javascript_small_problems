// Multiply All Pairs
// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.
// 
// You may assume that neither argument will be an empty array.
// 
// Example:
// 
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
//
// input: two arrays
// output: one array
//
// rules:
//  - output array is products of all combinations of number pairs between two arrays
//  - output is sorted in ascending order
//  - 2 * 4, 2 * 3, 2 * 1, 2 * 2, 4 * 4, 4 * 3, 4 * 1, 4 * 2
//  
// algorithm:
//  - for each number in the first array, multiply number by each number in the second array
//  - sort the resulting array
//  - return the resulting array
//
function multiplyAllPairs(arr1, arr2) {
  let result = [];

  arr1.forEach(num => {
    arr2.forEach(num2 => {
      result.push(num * num2);
    })
  })

  result.sort((a, b) => a - b);

  return result;
}
