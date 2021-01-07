// Sum of Digits
// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.
// 
// Examples:
// 
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
//
// input: number
// outpu: number
//
// rules:
//  - output is the sum of the digits
//
// algorithm:
//  - split number into string
//  - split string into array of string digits
//  - transform string digits into numbers
//  - reduce array of numbers to sum
//
function sum(number) {
  return [...String(number)].reduce((sum, num) => sum + Number(num), 0);
}
