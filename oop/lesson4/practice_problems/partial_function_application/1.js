// Using partial function application implement a function, sub5, that returns the value of a number subtracted by 5.

function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a, 5);
}

console.log(sub5(10)); // 5
console.log(sub5(20)); // 15