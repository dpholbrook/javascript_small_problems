// Merge Sort
// Merge sort is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, then combining those nested subarrays back together in sorted order. It is best explained with an example. Given the array [9, 5, 7, 1], let's walk through the process of sorting it with merge sort. We'll start off by breaking the array down into nested subarrays:

// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]
// We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:

// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]
// Write a function that takes an array, and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the merge sort algorithm as described above. You may assume that every element of the array will be of the same data type—either all numbers or all strings.

// Feel free to use the merge function you wrote in the previous exercise.

/*
input: array with numbers or strings
output: sorted array

rules:
  - break into nested sub arrays until every element is in a single element sub array
  - use merge sort to join arrays together
  
algorithm:
[9, 5, 7, 1]
[[9, 5],[7, 1]]
[[[9],[5]],[[7],[1]]]

[[[5, 9]], [[1, 7]]]
[[1,5,7,9]]
[1, 5, 7, 9]


[6, 2, 7, 1, 4]
[[6, 2], [7, 1, 4]]

[[[6],[2]],[[7],[1],[4]]]
[[[6],[2]],[[7],[1]],[4]]



[[[2, 6]], [[1, 7], [4]]]
[[2, 6], [[[1, 4, 7]]]]

[7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]
[[7, 3, 9, 15, 23, 1, 6, 51], [22, 37, 54, 43, 5, 25, 35, 18, 46]]
[[[7, 3, 9, 15] [23, 1, 6, 51]], [[22, 37, 54, 43], [5, 25, 35, 18, 46]]]
[[[[7, 3], [9, 15]] [[23, 1], [6, 51]]], [[[22, 37], [54, 43]], [[5, 25], [35, 18], [46]]]]
[[[[[7], [3]], [[9], [15]]] [[[23], [1]], [[6], [51]]]], [[[[22], [37]], [[54], [43]]], [[[5], [25]], [[35], [18]], [46]]]]


- split array in half
  - first half of array is length divided by two, rounded down
  - second half is length - first half
  
- while array length > 1, split it in half
  
  
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

// function mergeSort(array) {
//   array = splitInHalf(array);
//   console.log(array);
// }

function splitInHalf(array) {
  // console.log(array, array.length === 1);
  if (array.length === 1) {
    return array;
  }
  let firstHalf = Math.round(array.length / 2);
  let secondHalf = array.length - firstHalf;
  let firstPart = array.slice(0, firstHalf);
  let secondPart = array.slice(firstHalf, array.length);
  console.log(firstPart, secondPart);

  return [splitInHalf(firstPart), splitInHalf(secondPart)];
}

console.log(splitInHalf([9, 5, 7, 1, 4, 6]));
/*
[9, 5, 7, 1, 4, 6]
[]
if input array is longer than 1 then split in half
else return array
*/

// Examples:

// mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
// mergeSort([5, 3]);                 // [3, 5]
// mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

// mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]