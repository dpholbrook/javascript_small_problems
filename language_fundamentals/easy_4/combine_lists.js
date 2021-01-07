// Combine Two Lists
// Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.
// 
// You may assume that both input arrays are non-empty, and that they have the same number of elements.
// 
// Example:
// 
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
//
// input: two arrays
// output: one new array
//
// rules:
//  - result has alternating elements
//  - input arrays are not empty and have same number of elements
//
// algorithm:
//  - loop through first array and pushing the current element from the first array to the result and the current element from the second array to the result
//  - return the resulting array
//
// function interleave(arr1, arr2) {
//   const result = [];
// 
//   for (let i = 0; i < arr1.length; i += 1) {
//     result.push(arr1[i], arr2[i]);
//   }
// 
//   return result;
// }
  //
function interleave(arr1, arr2) {
  return arr1.flatMap((e, idx) => [e, arr2[idx]]); 
}
