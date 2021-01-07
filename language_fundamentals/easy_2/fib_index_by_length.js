// input: number that is number of digits in fib
// output: number that is the index of the first occurence of fib with input number of digits

// rules:
//  - index starts at 1!
//  - input is greater than or equal to 2

// 1, 1, 2, 3, 5, 8, 13, 21, ...


// algorithm:
//  - calculate fibs
//   - start with array of [1, 1] looping and adding the sum of the last two numbers of the array to the array

//  - if new fib digits === input then find the index + 1 of the fib in fibs array and return it

function findFibonacciIndexByLength(digits) {
  var fibs = [1, 1];
  var newFib;
 
  while (true) {
    newFib = (fibs[fibs.length - 2] + fibs[fibs.length - 1]);
    fibs.push(newFib);
    if (String(newFib).length === digits) {
      console.log(fibs.indexOf(newFib) + 1);
      return fibs.indexOf(newFib) + 1;
    }
  }

}


findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
