// Palindromic Strings Part 2
// Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.
// 
// Examples:
// 
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
//
// input: string
// output: boolean
//
// rules: 
//  - true if palindrome, false otherwise
//  - only alphanumberic matters
//  - case insensitive
//
//  algorithm:
//    - pull out alphanumeric chars from string
//    - downcase string
//    - pass to palindrome method

function isPalindrome(string) {
  var reversedString = string.split('').reverse().join('');
  return reversedString === string;
}

function isRealPalindrome(string) {
  var parsedString = string.match(/[A-Za-z0-9]/g).join('').toLowerCase();
  return isPalindrome(parsedString);  
}

