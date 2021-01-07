// What is the bill? 200
// What is the tip percentage? 15
//
// The tip is $30.00
// The total is $230.00

var bill;
var rate;
var tip;
var total;

bill = parseInt(prompt('What is the bill'));
rate = parseInt(prompt('What is the tip percentage?')) / 100;

tip = (bill * rate);
total = (tip + bill).toFixed(2);
tip = tip.toFixed(2)

console.log(`The tip is ${tip}`);
console.log(`The total is ${total}`);
