// Rotation Part 2
// Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

/*
input: two numbers
output: number

rules:
  - rotate the last n digits of the number
    - number n digits from the end goes to the end and remaining digits move left
  - assume that number is positive integer and that n is positive integer less than the number of digits in number


questions:
  - inputs: 0, negative, number greater than number of digits in the input number
  - can we have a number like 00457385
  - .00048324
  - floats?

data structure:
  - convert to string then array to perform operations and then convert back to string and then to number

algorithm:
  - convert number to string to array
  - remove element at the negative index n
  - add n to end of array
  - join to string
  - convert to number
  - return number
*/

// function rotateRightmostDigits(number, n) {
//   let array = [...String(number)];
//   let digit = array.splice(array.length - n, 1)[0];
//   array.push(digit);

//   return Number(array.join(''));
// } 

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  arrayCopy = array.slice();
  arrayCopy.push(arrayCopy.shift());
  // console.log(array);
  return arrayCopy;
}

function rotateRightmostDigits(number, n) {
  let stringNumber = String(number);
  let right = stringNumber.slice(stringNumber.length - n);  
  let left = stringNumber.slice(0, stringNumber.length - n);
  return Number(left + rotateArray([...right]).join(''));
}


// Examples:

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
console.log(rotateRightmostDigits(705291, 6));      // 52917
console.log(rotateRightmostDigits(123456890, 7));      // 1245678903