/*
Give us your feedback
Randomizer
Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.

input: n callback functions

rules:
  - call each callback at a random time between 0 and 2 * n seconds

algorithm:
  - n is callbacks length
  - random time function generates integer of seconds between 0 and n * 2 
    - multiply by 1000 for miliseconds
  - for each callback, call it with set timeout of random number 
*/

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let n = callbacks.length;

  function randomNumber() {
    return Math.floor(Math.random() * (n * 2) + 1)
  }

  callbacks.forEach(callback => {
    setTimeout(() => {
      callback();
    }, randomNumber() * 1000);
  });

  let i = 0;
  let counter = setInterval(() => {
    i += 1;
    console.log(i);
    
    if (i === n * 2) {
      clearInterval(counter);
    }
  }, 1000);
}

randomizer(callback1, callback2, callback3);

// setTimeout(() => console.log('1'), 1000);
// setTimeout(() => console.log('2'), 1000);
// setTimeout(() => console.log('3'), 1000);

  // for (let i = 1; i <= 6; i += 1) {
  //   setTimeout(() => {
  //     console.log(i);
  //   }, 1000 * i)
  // }


// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6