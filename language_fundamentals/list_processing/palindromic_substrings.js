// Palindromic Substrings
// Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.
// 
// You may (and should) use the substrings function you wrote in the previous exercise.
// 
// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.
// 
// input: string
// output: array of palindromic substrings
//
// rules: 
//  - palindrome is same forwards as backwards
//  - all char
//  - case sensitive
//  - sorted by order of appearance
//  - duplicate substrins included
//  - single chars are not palindromes
//
//
// Examples:
// 
// palindromes('abcd');       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
// 
console.log(palindromes('hello-madam-did-madam-goodbye'));
// // returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]
// 
console.log(palindromes('knitting cassettes'));
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
//
//
// algorithm: 
//  - return all substrings
//  - filter out substrings that are not palindromes
//    - is palindrome
//      - split string into array of chars
//      - reverse and join chars and compare with input substring
//      - if string length is 1, return false
//  - transform filtered array of characters into array of strings and return string array
//
function substrings(string) {
  return [...string].flatMap((_, idx) => {
    return substringsAtStart([...string].slice(idx))
  });
}

function substringsAtStart(string) {
  return [...string].map((_, idx) => string.slice(0, idx + 1));
}

function isPalindrome(chars) {
  let string = chars.join('');
  if (string.length === 1) return false; 
  return [...string].reverse().join('') === string;
}

function palindromes(string) {
  return substrings(string).filter(substring => isPalindrome(substring))
                           .map(chars => chars.join(''));
}
