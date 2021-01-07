// Merge Sorted Lists
// Write a function that takes two sorted arrays as arguments, and returns a new array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

/*
input: two sorted arrays
output: one array sorted containing all input elements

rules:
  - don't mutate input arrays
  - return new array
  - don't sort at end
  - build one element at a time
  - assume arrays contain only integers
  
algorithm:
  - copy input arrays
  - iterate combined array element number of times
    - each number is first element in array
  - if number in either array is undefined
    - concat the other array to result and return result
  - if number1 at current index is less than number2 at current index
    - shift number off and push to result array
  - if number2 < number1
    - shift off and push to result array
*/

function merge(arr1, arr2) {
  arr1 = arr1.slice();
  arr2 = arr2.slice();
  let result = [];
  let totalLength = arr1.concat(arr2).length;  
  
  for (let index = 0; index < totalLength; index += 1) {
    let num1 = arr1[0];
    let num2 = arr2[0];
    
    if (num1 === undefined) {
      result = result.concat(arr2);
      return result;
    } else if (num2 === undefined) {
      result = result.concat(arr1);
      return result;
    }  
    
    if (num1 < num2) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());    
    }
  }
  
  return result;
}

// Examples:

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]

console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([1, 1, 3], [1, 2, 2]));         // [1, 1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]

console.log(merge([], []));             // []
console.log(merge([1], []));             // [1]

const arr1 = [10, 20 , 30];
const arr2 = [15, 25 , 35];
console.log(merge(arr1, arr2));             // [10, 15, 20, 25, 39, 35];
console.log(arr1); // [10, 20 , 30]
console.log(arr2); // [15, 25 , 35]