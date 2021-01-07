// Fibonacci Numbers (Procedural)
// In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. In a language that is not optimized for 
// recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If 
// you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

// Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

// Rewrite your recursive fibonacci function so that it computes its results without using recursion.

// Recursive:
// function fibonacci(n) {
//   if (n === 1 || n === 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }  

/*
algorithm:
  - 1, 1, 2, 3, 5, 8, 13, 21, 34
  - build an array of fibs
  - if 1 or 2 then 1
  - else
  - 3 => 1 + 1
  - 4 => 1 + 2
  - 5 => 2 + 3

  1, 1
  1, 2
  2, 3
  3, 5

*/
function fibonacci(n) {
  let num = 1;
  let fib = 1;
  if (n <= 2) return fib;
  
  for (let i = 3; i <= n; i +=1) {
    [num, fib] = [fib, num + fib]
  }  

  return fib;
}  

// function fibonacci(n) {
//   if (n === 1 || n === 2) return 1;

//   previous2 = [1, 1];

//   for (i = 3; i <=n ; i +=1 ) {
//     previous2 = [previous2[1], previous2[0] + previous2[1]];
//   }  

//   return previous2[1];
// }  

// Examples:
console.log(fibonacci(3));       // 2
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
// Note that JavaScript can accurately compute intergers up to 16 digits long; this means that fibbonacci(78) is the largest Fibbonacci number 
// that you can accurately compute with simple operations in JavaScript.