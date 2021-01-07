// input: height and width in meters
// output: area in meters and square feet
//
// rules: 1 square meter == 10.7639 square feet
//
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).
var length;
var width;
var meterArea;
var feetArea;
const FEET_TO_METERS = 10.7639;

length = prompt('Enter the length of the room in meters:');
width = prompt('Enter the width of the room in meters:');

meterArea = length * width;
feetArea = meterArea * FEET_TO_METERS;

console.log(`The area of the room is ${meterArea} square meters.`);
console.log(`The area of the room is ${feetArea} square feet.`);
