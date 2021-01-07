// Get the Middle Character
// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.
// 
// Examples:
// 
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
//
// input: string
// output: one or two characters
//
// rules:
//  - string is not empty
//  - if string odd, return one
//  - if string even, return two 
//
// algorithm:
//  - if the string length is odd, divide by two, round down and slice out char at that index 
//  - if the string length is even, divide by two and take .substr(result -1, 2)
//
function centerOf(string) {
  if (string.length % 2 === 1) {
    let middle = Math.floor(string.length / 2)
    return string.substr(middle, 1);
  } else {
    let middle = (string.length / 2) - 1;
    return string.substr(middle, 2);
  }
}
