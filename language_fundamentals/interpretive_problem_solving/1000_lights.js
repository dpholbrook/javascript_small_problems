// 1000 Lights
// You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.
//
// Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.
//
// Examples:

/*
input: number (number of switches and the number of passes)
output: array of numbers (lights that are on at the end)

rules:
  - each light has a switch
  - switches and lights are 1 to n
  - all lights are off at start
  - you take n passes
  - pases
    - 1: 1, 2, 3, 4, 5...
    - 2: 2, 4, 6, 8, 10...
    - 3: 3, 6, 9, 12...
    - 4: 4, 8, 12, 16...
  - return array of index + 1 of light that are on

questions:
  - input
    - always number?
    - always integer?
    - negative number?
    - 0?

data structure:
  - array of lights that strings "on" or "off"
  -
  -

algorithm:
  - create array of n lights
  - each light is 'off'
  - loop through lights 5 times
    - each time, iterate through the elements
    - if the index + 1 of the element is divisible by the time, then toggle the element

LS Algorithm in my words:
  - iterate through N lights N number of times
  - for each iteration i, transform the array of lights
    - if the index + 1 of the light is a multiple of i, toggle the light
  - filter array of lights to return only lights that are on 
  - tranform array of lights to return index + 1 for each light

  - toggle the element
    - if the element is 'on', assign it to 'off', otherwise assign it to 'on'
  - we have array of light status
    - return index + 1 of lights that are on
    - transorm array into array of status index sub arrays
    - filter for sub arrs with status on
    - tranform into array of indexes

['off', 'off', 'off', 'off', 'off']

*/

// function lightsOn(switches) {
//    let lights = [];
//    lights.length = switches;
//    lights = lights.fill('off');
// 
//    for (let i = 1; i <= switches; i += 1) {
//      for(let j = 0; j < switches; j += 1) {
//        if ((j + 1) % i === 0) {
//          // console.log('toggle')
//          lights[j] = toggle(lights[j]);
//        }
//      }
//    }
// 
//    lights = lights.map((light, idx) => [light, idx + 1])
//                   .filter(statusArr => statusArr[0] === 'on')
//                   .map(statusArr => statusArr[1]);
//    return lights;
// }
// 
// function toggle(string) {
//   return string = string === 'off' ? 'on' : 'off';
// }
//
function lightsOn(switches) {
  let lights = generateLights(switches);

  for (let i = 1; i <= lights.length; i += 1) {
    lights = toggleLights(lights, i);
  }

  return returnOn(lights);
}  

function generateLights(switches) {
  let lights = [];
  lights.length = switches;
  return lights.fill(false);
}  

function toggleLights(lights, round) {
  return lights.map((light, idx) => {
    return ((idx + 1) % round) === 0 ? !light : light; 
  })  
}  

function returnOn(lights) {
  return lights.map((light, idx) => [light, idx])
               .filter((light) => light[0] === true)
               .map(light => light[1] + 1);
}  


// console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(10));
// lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// lightsOn(0); // []
// lightsOn(1);
// lightsOn(2);
// console.log(lightsOn(1000));
