// Multiplicative Average
// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.
// 
// Examples:
// 
console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
//
// input: array of integers
// output: string number with three decimal places
//
// algorithm:
//  - multiply each element of the array and divide by the number of elements
//  - convert result to number with three decimal places
//  - convert number to string
//  - return result
//
function showMultiplicativeAverage(arr) {
  let product = arr.reduce((acc, value) => {
    return value * acc;
  })

  return (product / arr.length).toFixed(3);
}

