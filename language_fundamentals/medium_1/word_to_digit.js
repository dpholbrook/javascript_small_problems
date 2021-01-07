// Word to Digit
// Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" 
// — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

// Example:

/*
input: string
output: string

rules:
  - convert number words to string digits
  - number words
    - ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  - number word's string digit is its index in number words array, converted to string
  - number word can have puncutation appended to it

algorithm:
  - use regex capture groups to replace number word with index of number word
*/

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// function wordToDigit(string) {
//   return string.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, match => String(NUMBER_WORDS.indexOf(match)));
// }

function wordToDigit(string) {
  return string.replace(/\b(zero|one|two|three|four|five|six|seven|eight|nine)\b/gi, lookUpNumberIndex);
}

function lookUpNumberIndex(numberWord) {
  return String(NUMBER_WORDS.indexOf(numberWord.toLowerCase()));
}  
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('Four hundred pounds is a lot of weight.'));
// "4 hundred punds is a lot of weight.
console.log(wordToDigit('Three... Two... One... Go!'));
// "3... 2... 1... Go!"
console.log(wordToDigit('onetwothree'));
// "onetwothree"



// "Did you sk8 all the way?"

// function testReplace(string) {
//   return string.replace(/t|r/g, '$&')
// }  

// console.log(testReplace('string'));