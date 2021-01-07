// Uppercase Check
// Write a function that takes a string argument, and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.
// 
// Examples:
// 
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
//
// input: string
// output: boolean
//
// rules: 
//   - if all alpha chars are uppercase, return true
//   - if empty string, return true
//
// algorithm:
//  - loop through string
//  - if char is alpha and lowercase, return false
//  - return true
//
// function isUppercase(string) {
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i].match(/[a-z]/)) return false;
//   }
//   return true; 
// }
//
function isUppercase(string) {
  return !(/[a-z]/.test(string))
}
