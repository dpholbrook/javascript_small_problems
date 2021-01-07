// Letter Swap
// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.
// 
// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.
// 
// Examples:
// 
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
//
// input: string
// output: string
//
// rules:
//  - each word has at least one letter
//  - input has at least one word
//  - input is only words and spaces
//  - input has no extra spaces
//  - 
//  - output is the same string but each word has the first and last letter swapped
//  - if only one letter in a word, then word stays the same
//  - swapped letters retain case
//  
//  data structure:
//    - convert string to array of string words
//    - convert each string word to array of string chars
//    - join string chars back to string
//    - joing array of words back to word
//
//  algorithm:
//    - split string into array of words
//    - return a new array of words where letters are swapped
//      - for each word
//        - convert to array of chars
//        - the first letter equals the last letter and the last letter eqauls the first letter
//        - use temp variable for first letter
//        - join word arr back to string word
//    - join array into string with ' ' delimeter
//    - return result
//
//

function swap(string) {
  var wordArr = string.split(' ').map( (word) => {
    return swapFirstAndLastChar(word);
  })

  return wordArr.join(' ');
}

function swapFirstAndLastChar(word) {
  var charArr = word.split('');
  var tempLetter = charArr[0];

  charArr[0] = charArr[charArr.length - 1];
  charArr[charArr.length - 1] = tempLetter;

  return charArr.join('');
}
