// Combining Arrays
// Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.
// 
// Example:
// 
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
//

// input: two arrays
// output: combined array

// rules: 
//  - no duplicates
//
// algorithm:
//  - iterate through the first array, pushing each element to result array as long as that element does not already exists in the result array
//  - to the same for the second array
//  - return the resulting array
//
function union(arr1, arr2) {
  result = [];
  result = pushUnique(arr1, result);
  return pushUnique(arr2, result);
}

function pushUnique(arr, result) {
  arr.forEach(e => {
    if (!result.includes(e)) {
      result.push(e);
    }
  });

  return result
}
// function pushUnique(arr, result) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (result.indexOf(arr[i]) < 0) {
//       result.push(arr[i]);
//     }  
//   }
// 
//   return result;
// }
