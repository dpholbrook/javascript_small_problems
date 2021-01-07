// Double Char Part 2
// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.
// 
// Examples:
// 
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
//
// input: string
// output: string
//
// rules:
//  - double each consonant character
//  - handle upper and lowercase
//
// algorithm:
//  - create string of consonants (upper and lower)
//  - iterate through input string
//  - if current char is in consonants then push two of them to result
//  - otherwise push char to result
//  - return the string
//
// function doubleConsonants(string) {
//   const CONSONANTS = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
//   let result = '';
// 
//   for (let i = 0; i < string.length; i += 1) {
//     result += string[i];
// 
//     if (CONSONANTS.includes(string[i])) {
//       result += string[i];
//     } 
//   };
// 
//   return result;
// }
// function doubleConsonants(string) {
//   return [...string].flatMap(char => {
//     return /[^aeiou]/.test(char) ? [char, char] : char;  
//   }).join('');
// }
 function doubleConsonants(str) {
  return str.split('').map(char => {
    return /[^aeiou]/.test(char) ? char + char : char;
  }).join('');
} 
