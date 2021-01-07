// Reverse It Part 1
// Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.
// 
// Examples:
// 
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
//
// input: string
// output: string
//
// rules:
//  - output is string with words in reverse order
//
// algorithm:
//  - split string into array of words, reverse array, join to string
//
function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}
