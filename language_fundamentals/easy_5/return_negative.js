// Always Return Negative
// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.
// 
// Examples:
// 
console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
//
// input: number
// output: number
//
// rules: 
//  - return negative number
//
// algorithm:
//  - if number is positive, subtract it from zero and return result
//  - if number is negative, return the number
//
// function negative(number) {
  // if (number > 0) return 0 - number;   
  // if (number < 0)return number;
  // return -0;
// }
function negative(number) {
  let abs = Math.abs(number);  
  return abs > 0 ? abs * -1 : -0; 
}
