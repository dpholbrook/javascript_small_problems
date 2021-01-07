// Staggered Caps Part 1
// Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.
// 
// Examples:
// 
console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"
//
// input: string
// output: string
//
// rules:
//  - capitalize every other character
//
// algirthm:
//  - downcase the whole string
//  - iterate through the downcased string
//    - if index is even, uppercase char and add to result string
//    - otherwise, just add char to result string
//
function staggeredCase(string) {
  let lowerString = string.toLowerCase();
  let result = '';

  for (let i = 0; i < lowerString.length; i += 1) {
    if (i % 2 === 0) {
      result += lowerString[i].toUpperCase();
    } else {
      result += lowerString[i];
    }  
  };

  return result;
}

