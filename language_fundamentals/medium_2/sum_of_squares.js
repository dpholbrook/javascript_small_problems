// Sum Square - Square Sum
// Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

/*
input: number representing first n positive integers
output: number

rules:
  - square of sums
    - sum first n positive integers
    - square sum
  - sum of squares
    - square each of the firt n positive integers
    - sum the sqaures
  - subtract sum of squares from square of sums

questions:
  - n will positive integer?

data structure:
  - number input
  - array of numbers
    - transform and reduce to number
  - get number resut from numbers

algorithm:
  - build array of numbers
  - square of sums
    - reduce copy of array to sum number
      - square result
  - sum of squres
    - transform numbers array into squares
      - reduce to return sum of squares
  - return squareOfSums - sumOfSquares
*/

function sumSquareDifference(num){
  let numbers = [];
  for (let count = 1; count <= num; count += 1) {
    numbers.push(count);
  }
  
  let squareOfSums = numbers.reduce((sum, num) => sum + num)**2;
  let sumOfSquares = numbers.map(num => num**2)
                            .reduce((sum, num) => sum + num);
  
  return squareOfSums - sumOfSquares;
}

// Examples:

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150