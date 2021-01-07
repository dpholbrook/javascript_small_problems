// Tri-Angles
// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these 
// conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the 
// triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the 
// arguments are in degrees.

/*
input: three numbers that are the degree angles of a triangle
output: string 'right', 'acute', 'obtuse', or 'invalid'

rules:
  - valid triangle
    - a + b + c === 180
    - all angles are greater than 0

  - right triangle
    - one angle is 90
  - acute 
    - all angles are less than 90
  - obtuse
    - one angle is greater than 90

  - assume integer values
  - can we have negative integers?
  - are all inputs going to be numbers?


data structure:
  - helper function return boolean
  - use numbers to produce string output

algorithm:
  - check to see if triangle is valid, if not, return 'invalid', if valid continue
    - a + b + c === 180
    - all angles are greater than 0
  - if right, return 'right'
    - see if any angle === 90
  - if acute, return 'acute'
    - see if every angle < 90
  - if obtuse, return 'obtuse'
    - see if any angle > 90
  - 
*/

function triangle(a, b, c) {
  if (!validTriangle(a, b, c)) {
    return 'invalid';
  } else if (rightTriangle(a, b, c)) {
    return 'right';
  } else if (acuteTriangle(a, b, c)) {
    return 'acute';
  } else if (obtuseTriangle(a, b, c)) {
    return 'obtuse';
  }  
}  

function validTriangle(a, b, c) {
  let condition1 = [a, b, c].every(angle => angle > 0);
  let condition2 = a + b + c === 180;

  return condition1 & condition2;
}  

function rightTriangle(a, b, c) {
  return [a, b, c].some(angle => angle === 90);
}  

function acuteTriangle(a, b, c) {
  return [a, b, c].every(angle => angle < 90);
}  

function obtuseTriangle(a, b, c) {
  return [a, b, c].some(angle => angle > 90);
}  

// Examples:

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(-10, 90, 100));       // "invalid"
console.log(triangle(10, 90, 100));       // "invalid"