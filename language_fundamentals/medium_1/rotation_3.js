// Rotation Part 3
// Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

// Examples:
/*
input: number
output: number

rules:
  - return max rotated number
    - first digit rotated to end
    - second digit rotated to end
    - ... up to N
    - (if number has 6 digits, we rotate 6 times)
    - the value of the number changes with each iteration

data structure:
  - pass number to rotate right most digits method

algorithm:
  - number of digits times
    - pass number to rotate right most digits method
    - n is number of digits and counts down with each iteration


  - spl
735291
352917
329175
321759
321597
321579

105
051
15
15

1005
51
15
15

*/

function maxRotation(number) {
  let digits = String(number).length;
  for (n = digits; n > 1; n -= 1) {
    number = rotateRightmostDigits(number, n)
  }  

  return number;
}  

function rotateRightmostDigits(number, n) {
  let array = [...String(number)];
  let digit = array.splice(array.length - n, 1)[0];
  array.push(digit);

  return Number(array.join(''));
} 


console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(1005));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845