// Double Char Part 1
// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.
// 
// Examples:
// 
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
//
// input: string
// output: string
//
// rules:
//  - double each char (spaces)
//  - if string is empty, return empty string
//
// algorithm:
//  - loop through string and add two chars to result string for every char
//  - return result string
//
function repeater(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    result += string[i] + string[i];
  }

  return result;
}
