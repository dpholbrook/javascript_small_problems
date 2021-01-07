// 1
// higher order functions take function arguments, or return a function, or both

//2
// let numbers = [1, 2, 3, 4];
// function checkEven(number) {
//   return number % 2 === 0;
// }

// numbers.filter(checkEven); // [2, 4]
// filter is a higher order functino because it takes a function argument

//3
let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function checkEven(number) {
    return number % 2 === 0;
  }
}

let checkEven = makeCheckEven();

numbers.filter(checkEven); // [2, 4]

//4

function execute(func, operand) {
  return func(operand);
}

let result1 = execute(function(number) {
  return number * 2;
}, 10); // 20

let result2 = execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"

console.log(result1);
console.log(result2);

//5

function makeListTransformer(func) {
  return function(array) {
    return array.map(element => {
      return func(element);
    });
  }

}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]

// timesTwo takes array arg
// for each item in array it executes the function

// makeListTransformer returns function that takes array arg
// that function transorms each arg according to function passed in

// more succinct:
function makeListTransformer(func) {
  return function(array) {
    return array.map(func);
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]