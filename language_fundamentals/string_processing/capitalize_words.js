// Capitalize Words
// Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.
// 
// You may assume that a word is any sequence of non-whitespace characters.
// 
// Examples:
// 
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
//
// input: string
// output: string
//
// rules:
//  - first letter of each word is caps
//  - all other letters are not caps
//  - word is non whitespace chars
//
// algorithm:
//  - split string into array of words on any non whitespace char (/\s/)
//  - transform each word into capitalized version
//    - downcase the string
//    - upcase the first char
//  - join the transformed word array
//
function wordCap(string) {
  return string.split(/\s/)
               .map(word => {
                word = word.toLowerCase();
                return word[0].toUpperCase() + word.slice(1); 
               })
               .join(' ');
}