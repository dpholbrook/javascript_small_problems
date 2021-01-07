// Build a program that logs when the user will retire and how many more years the user has to work until retirement.
// 
// Example:
// 
// What is your age? 30
// At what age would you like to retire? 70
// 
// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!
//
// input: numbers (strings)
// output: string with retirement age
//
// data structure:
//  - inputs string and must be converted to number
//  - numbers must be interpolated
//
// algorithm:
//  - get user inputs
//  - convert to numbers
//  - calculate date now
//  - add years to date
//  - print string

var age = Number(prompt('What is your age?'));
var retirementAge = Number(prompt('At what age would you like to retire?'));
var yearsToRetirement = retirementAge - age;
var currentYear = new Date().getFullYear();
var retirementYear = currentYear + yearsToRetirement;
console.log(age);
console.log(retirementAge);
console.log(yearsToRetirement);
console.log(currentYear);


console.log(`It's ${currentYear}. You will retire in ${retirementYear}. You have only ${yearsToRetirement} to go!`);












