function greet(first, second) {
  console.log(`${first}, ${second}`);
}

// greet('hi there', 'jim');

function makeGreet(first) {
  return function(second) {
    return greet(first, second);
  }
}

let sayHello = makeGreet('Hello');
let sayHi = makeGreet('Hi');

sayHello('jimmy');
sayHi('susie');