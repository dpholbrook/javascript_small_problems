function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b)
  }
}

function multiply(a, b) {
  return a * b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100)); // 500

// multiplyBy5 retains access to 5 stored in b and the multiply function long after makePartialFunc runs
// this is because the multiplyBy5 function is a closure which keeps the context it was defined in where multiply and 5 were both in scope