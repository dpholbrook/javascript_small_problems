// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?

// this raises an error because sum is not a function. the sum function declaration is hoisted to the top of the scope and then reassigned to various numbers
// we can use an IIFE to get the sum of the array and add it to the number sum

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

let arraySum = (function(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum += arraySum);  // 

