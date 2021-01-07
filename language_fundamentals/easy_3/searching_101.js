// Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.
// 
// Examples:
// 
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17
// 
// The number 17 appears in [25, 15, 20, 17, 23].
// 
// -----
// 
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18
// 
// The number 18 does not appear in [25, 15, 20, 17, 23].
//
// input: six numbers
// output: string message
//
// rules: 
//  - numbers are input from users
//  - numbers go into array
//  - first 5 numbers are array
//  - if last number is in array then say so
//
//  algorithm:
//    - get user input for numbers
//      - validate?
//    - create array of first 5 numbers
//    - if 6th number is in array, say so, else not

var i;
var first = Number(prompt('Enter the first number'));
var second = Number(prompt('Enter the second number'));
var third = Number(prompt('Enter the third number'));
var fourth = Number(prompt('Enter the fourth number'));
var fifth = Number(prompt('Enter the fifth number'));
var sixth = Number(prompt('Enter the sixth number'));

var numbers = [first, second, third, fourth, fifth, sixth];

// if (numbers.indexOf(sixth) < 0) {
//   console.log(`The number ${sixth} is not in [${numbers}]`);  
// } else {
//   console.log(`The number ${sixth} is in [${numbers}]`);  
// }

function greaterThan(base) {
  if (numbers.some((number) => number > base)) {
    return true;
  } else {
    return false;
  }
}

if (greaterThan(25)) {
  console.log("This is less dumb");
} else console.log("This is dumb");


