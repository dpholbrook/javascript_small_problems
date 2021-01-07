// Lettercase Percentage Ratio
// Write a function that takes a string, and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

/*
input: string
output: object with string values

rules:
  - percentage lowercase
  - percentage uppercase
  - percentage neither
  
  - string has at least one char
  - string has any type of char
  - percentage is float with two decimal places
  
data structure:
  - iterate through string
  - object to store counts

algorithm:
  - iterate through string
    - for each char, see if it is uppercase, lowercase, neither and increment object accordingly
      - check to see if char is alpha
        - if it is check if uppercase
          - if it is increment uppercase
          - else icnrement lowercase
      - if not alpha increment neither
      
  - total is string.length
  
  - iterate through object changing values from count to percentage
    - count / total
  - convert percentage to string with two decimals
    - if Number.toInteger(percent), then percent..toFixed(2)
    - else percent.toFixed(2)
  - return object

  algorithm:
    - return an object with three properties
    - for each property pull out desired count, converte to percent, convert to string with two decimals
*/

// function letterPercentages(string) {
//   let percents = { lowercase: 0, uppercase: 0, neither: 0, };
  
//   for(let index = 0; index < string.length; index += 1) {
//     let char = string[index];
//     if (/[a-z]/.test(char)) {
//       percents['lowercase'] += 1;
//     } else if (/[A-Z]/.test(char)) {
//       percents['uppercase'] += 1;
//     } else {
//       percents['neither'] += 1; 
//     }  
//   }  
  
//   for (let count in percents) {
//     percents[count] = ((percents[count] / string.length) * 100).toFixed(2);
//   }
    
//   return percents;
// }  

function letterPercentages(string) {
  return {
    lowercase: (string.replace(/[^a-z]/g, '').length / string.length * 100).toFixed(2),
    uppercase: (string.replace(/[^A-Z]/g, '').length / string.length * 100
    ).toFixed(2),
    neither: (string.replace(/[A-Za-z]/g, '').length / string.length * 100).toFixed(2),
  }
}

// function format

// Examples:

// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('kh 4 *& DK'));
// // { lowercase: "20.00", uppercase: "20.00", neither: "60.00" }

console.log(letterPercentages('k'));
// // { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }
