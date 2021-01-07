// Lettercase Counter
// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.
// 
// Examples:
// 
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
//
// input: string
// ouput: object
//
// rules:
//  - 3 properties
//    - lowercase letters
//    - uppercase letters
//    - neither (spaces, numbers, +
//
// algorithm:
//  - build object matching citeria for each property value
//    - for each match, return an array of matches and length will be the value
//    - if match is null then value is 0
//
function letterCaseCount(string) {
  return {
    lowercase: matchCount(string.match(/[a-z]/g)),
    uppercase: matchCount(string.match(/[A-Z]/g)),
    neither: matchCount(string.match(/[^a-z]/gi)),
  };
}

function matchCount(array) {
  return array ? array.length : 0;
}
//
// algorithm:
//  - build the object by assigning values
//  - values are the length of each match array
//  - if match is null, then make empty array
// function letterCaseCount(string) {
//   let lowerArr = string.match(/[a-z]/g) || []; 
//   let upperArr = string.match(/[A-Z]/g) || [];
//   let neitherArr = string.match(/[^a-z]i/) || [];
//   return {
//     lowercase: lowerArr.length,
//     uppercase: upperArr.length,
//     neither: neitherArr.length,
//   };
// }
