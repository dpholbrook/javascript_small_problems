// Swap Case
// Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.
// 
// Examples:
// 
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
//
// input: string
// output: string
//
// rules:
//  - swap case
//  - preserve other chars
//
// algorithm:
//  - loop through the string
//  - if char is upper, convert to lower
//  - if char its lower, convert to upper
//  - for each character push new character to result string
function swapCase(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (/[A-Z]/.test(string[i])){
      result += string[i].toLowerCase();
    } else if (/[a-z]/.test(string[i])) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }  
  }

  return result;
}
