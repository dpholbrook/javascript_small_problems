// Palindromic Number
// Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.
// 
// Examples:
// 
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(017571));       // true
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
//
// input: number
// output: boolean
//
// rules:
//  - true if palindromic number
//  - false otherwise
//
//  data structure:
//    - convert number to string
//    - split string number into array of chars
//    - convert array to string
//
//  algorithm:
//    - convert number to string
//    - split string into array of chars
//    - reverse array
//    - join array
//    - compare original string with reverse string
//    - return true or false


function isPalindrome(string) {
  var reversedString = string.split('').reverse().join('');
  console.log(reversedString);
  console.log(string);
  return reversedString === string;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

// for numbers starting with zero
// algorithm:
//  - convert number to string
//    - remove last digit from number convert it, and add to end of result string
//    - do this until there are no more digits left
//    - return result

function toTrueString(number) {
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var i;
  var result = '';
  var digit;

  while (number > 0) {
    digit = number % 10;
    result += chars[digit]
    number = Math.floor(number / 10);
  };

  return result;
}

console.log(toTrueString(098890));
