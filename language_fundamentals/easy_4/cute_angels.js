// Cute Angles
// Write a function that takes a floating point number representing an angle between 0 and 360 degrees, and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

/*
input: number
output: formatted string

rules:
  - 60 seconds in minute
  - 60 minutes in degree
  
algorithm:
  - multiply input by seconds per degree to get total seconds
  - divide total seconds by 3600 to get degrees
  - remainder of that operation is remaining seconds
  - divide remaining seconds by 60 to get mintes
  - remainder of that oepration is seconds left
  - format into string
  - get char code for degree
  
  format number
  if number length is less than 2, convert to string and add 0 to front
  otherwise convert to string
  return string number
*/

function dms(num) {
  const SPD = 3600;
  const SPM = 60;
  const DEGREE = '\xB0'
  
  let totalSeconds = num * SPD;
  let degrees = Math.floor(totalSeconds / SPD);
  let remainder = totalSeconds % SPD;
  let minutes = Math.floor(remainder / SPM);
  let seconds = Math.round(remainder % SPM);
  
  return `${formatNumber(degrees)}${DEGREE}${formatNumber(minutes)}'${formatNumber(seconds)}"`
}

function formatNumber(num) {
  let stringNum = String(num);
  if (stringNum.length < 2) {
    stringNum = '0' + stringNum;
  }
  
  return stringNum;
}



// Examples:

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
// Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.