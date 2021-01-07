// Write a function named makeMultipleLister that, when invoked and passed a number, returns a function that logs every positive integer multiple of that number less than 100. Usage looks like this:

// function makeMultipleLister(number) {
//   return function() {
//     let counter = 1;
//     while (number * counter < 100) {
//       console.log(number * counter);
//       counter += 1 ;
//     }
//   }
// }

// LS solution:

function makeMultipleLister(number) {
  return function () {
    let i;
    for (i = number; i < 100; i += number) {
      console.log(i);
    }
  };
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91