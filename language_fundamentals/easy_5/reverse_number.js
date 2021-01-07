// Reverse Number
// Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.
// 
// Examples:
// 
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1
//
// input: positive integer
// output: positive integer reversed
//
// rules:
//  - trailing zeros get dropped
//
// algorithm:
//  - convert number to string
//  - loop through string until there are no trailing zeros
//  - loop through string to reverse it
//    - add currrent char to result ( result += current_char)
//  - convert result to number 
//  - return the result
//
// function reverseNumber(number) {
//   let stringNum = String(number);
//   let result = '';
// 
//   while (stringNum[stringNum.length - 1] === '0') {
//     stringNum = stringNum.slice(0, stringNum.length - 1);
//   };
// 
//   for (let i = 0; i < stringNum.length; i += 1) {
//     result = stringNum[i] + result;
//   };
// 
//   return result;
// }

function reverseNumber(number) {
  return parseInt([...String(number)].reverse().join(''), 10);
}
