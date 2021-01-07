// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.
// 
// Examples:
// 
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
//
// input: string
// output: boolean
//
// rules:
//  - true if palindrome
//  - false otherwise
//  - case sensitive
//  - all characters matter
//
//  algorithm:
//    - split string into array
//    - reverse the array
//    - join reversed array
//    - check to see if strings are equal
//

function isPalindrome(string) {
  var reversedString = string.split('').reverse().join('');
  return reversedString === string;
}


