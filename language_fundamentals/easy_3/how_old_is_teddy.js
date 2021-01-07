// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 200 (inclusive).
// 
// Example Output:
// 
// Teddy is 69 years old!

// input: none
// output: string with random number between 20 and 200 inclusive

// algorithm:
//  - generate random number between 20 and 200 inclusive
//    - number = String((Math.floor(Math.random() * 201) + 20));
//  - log string with age to console
//

// - create object
// - 1000 times generate random number 
// - if number is object key incrimetn by 1
// - otherwise add number = 1 to object
//
//


console.log(`Teddy is ${randomBetween(20, 200)} years old!`);

// function randomBetween(min, max) {
//   max += .5
//   min -= .5
//   return Math.round(Math.random() * (max - min) + min);
// }

function randomBetween(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function countRandomNumbers() {
  var count = {};
  var counter = 0;
  var number;

  while (counter < 10000) {
    number = String(randomBetween(20, 30));
    if (count[number]) {
      count[number] += 1;
    } else {
      count[number] = 1;
    }

    counter += 1;
  };

  console.log(count);
}

countRandomNumbers();
