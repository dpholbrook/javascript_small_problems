// Unlucky Days
// Write a function that takes a year as an argument, and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

/*
input: number (year)
output: number (number of days in the year that are friday (5 day of week) and whos day of the month is 13)

rules:

data structure:
  - year number to date object
  - return day of week number and day of month number from data object

algorithm:
new Date(1995, month, 13)
  - iterate from 1 to 12
  - create date for each month of year with day of month set to 13
    - check to see if day of week is 5
      - if it is, increment count
  - return count

Examples:
*/

function fridayThe13ths(year) {
  let count = 0;
  
  for (let month = 0; month < 12; month +=1) {
    let date = new Date(year, month, 13);  
    let dayOfWeek = date.getDay();
    if (dayOfWeek === 5) {
      count += 1; 
    }
  }  
  
  return count;
}  

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2