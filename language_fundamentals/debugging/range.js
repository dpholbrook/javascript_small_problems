// Range
// We are assigned the task to implement a range function that returns an array of integers beginning and ending with specified start and end numbers. When only a single argument is provided, that argument should be used as the ending number and the starting number should be 0.

// Check our code below. Why do the example invocations fail with an error saying Maximum call stack size exceeded? Can you fix the code, so it runs without error and satisfies the requirements?

function range(start, end) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  
  const rangeArray = [];

  for (let element = start; element <= end; element++) {
    rangeArray.push(element);
  }

  return rangeArray;
}

// function range2(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));
console.log(range(-10, 0));

// We had two functions with the same name and variable names within these functions with the same name as the functions
// We should have different function names and variable names
// The second function definition will override the first
// We need to determine whether a second arg has been passed in and if not, assign end to start and stat to 0

// FEX 
/*
  if (!end) {
    start = 0;
    end = start;
  }
  
  This code will not work because we need to assign end to start before reassigning start to 0
  Also, if start is -10 and end is 0, this code will think that end was not passed in because !0 returns true
*/

