// Next Featured Number Higher than a Given Value
// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

/*
input: number
output: number

rules:
  - output is next featured number greater than the input
  - featured number
    - odd
    - multiple of 7 (num % 7 === 0)
    - each digit occurs only once
  - if > 9876543201 then issue error message
  
data structure:
  - convert number to string to check for same digit

algorithm:
  - count up from input number to 9876543201
    - for each count check to see if its a featured number
      - if it is, return true
    
  - featured number if
    - odd
    - multiple of 7 (num % 7 === 0)
    
    - unique digits
      - convert number to string
      - iterate on string
      - for each char replace all digits in string num with ''
        - if length is > 1, return true
        - else return false
        
    - unique digits v2
      - convert number to string and split into array of chars
      - transform into array of digits
      - iterate on array of digits
        - for each digit
          - if unique digits array includes current digit, return false
          - else push digit to uniuqe
      - if we make it trough iteration, return true
*/

function featured(num) {
  const MAX_FEATURED_NUMBER = 9876543201;
  if (num >= MAX_FEATURED_NUMBER) {
    return 'There is no next featured number.'
  }
  
  for (let count = num + 1; count <= MAX_FEATURED_NUMBER; count + 14) {
    if (count % 2 === 1 
      && count % 7 === 0 
      && uniqueDigits(count)) {
      return count;  
    } else {
      count += 1; 
    }
  }  
}  

// function uniqueDigits(number) {
//   let stringNum = String(number);
  
//   for (let i = 0; i < stringNum.length; i += 1) {
//     let char = stringNum[i];
//     let regex = new RegExp(`[^${char}]`, 'g');
//     let dupes = stringNum.slice().replace(regex, '');
//     if (dupes.length > 1) {
//       return false 
//     }
//   }
  
//   return true;
// }

// function uniqueDigits(number) {
//   let stringNum = String(number);
  
//   for (let i = 0; i < stringNum.length; i += 1) {
//     let char = stringNum[i];
//     let regex = new RegExp(`[^${char}]`, 'g');
//     let dupes = stringNum.match(regex) || [];
//     if (dupes.length > 1) {
//       return false 
//     }
//   }
  
//   return true;
// }
  
  function uniqueDigits(number) {
    let uniques = [];
    let digits = [...String(number)].map(char => Number(char));
    
    for (let i = 0; i < digits.length; i += 1) {
      let digit = digits[i];
      if (uniques.includes(digit)) {
        return false; 
      } else {
        uniques.push(digit);
      }
    }
    
    return true;
  }

// Examples:

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543201));    // 1023456987