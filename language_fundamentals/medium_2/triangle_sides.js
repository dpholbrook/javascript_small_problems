// Triangle Sides
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side 
// must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, and returns one of the following four strings 
// representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.


/*
input: three numbers that are the sides of the triangle
output: string describing the triangle: 'equilateral', 'isosceles', 'scalene', or 'invalid'

quesions:
  - float
  - negative numbers
  - always number inputs?
rules:
  - equilateral a === b && b === c
  - isosceles a === b || c === b || c === a AND not equilateral
  - scalene a !== b && a !== c && b !== c

  - valid triangle
    - (a + b) > c where a and b are shorter sides
    - a > 0 && b > 0 && c > 0
    - sides must be >= 1

data structure:
  - check numbers and return string

algorithm:
  - if not valid, return invalid
    - valid triangle?
      - two smaller sides sum to be greater than larger side
      - all sides are >= 0
  - if equilateral, return 'equilateral'
  - if isosceles, return 'isosceles'
  - if scalene, return 'scalene'
*/

// Examples:

function triangle(a, b, c) {
  if (!validTriangle(a, b, c)) return 'invalid';
  if (equilateral(a, b, c)) return 'equilateral';
  if (isosceles(a, b, c)) return 'isosceles';
  if (scalene(a, b, c)) return 'scalene';
}  

function triangle(a, b, c) {
  if (!validTriangle(a, b, c)) {
    return 'invalid';
  } else if (equilateral(a, b, c)) {
    return 'equilateral';
  } else if (isosceles(a, b, c)) {
    return 'isosceles';
  } else if (scalene(a, b, c)) return 'scalene';
}  

function validTriangle(a, b, c) {
  let sides = [a, b, c].sort((num1, num2) => num1 - num2);
  let condition1 = sides[0] + sides[1] > sides[2];
  let condition2 = sides.every(side => side >= 1);

  return condition1 && condition2
}  

function equilateral(a, b, c) {
  return a === b && a === c;
}  

function isosceles(a, b, c) {
  return a === b || c === b || c === a;
}  

function scalene(a, b, c) {
  return a !== b && a !== c && b !== c;
}  

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(1.5, 3, 3));      // "isosceles"
console.log(triangle(3, 1.5, 3));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(6, 7, 8));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(10, 2, 2));        // "invalid"
console.log(triangle(-3, 1, 1));        // "invalid"
console.log(triangle(0, 1, 1));        // "invalid"
