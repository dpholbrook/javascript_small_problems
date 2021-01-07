// input: number
// output: number
// 
// rules:
//   - double number is same first half as second (even digits)
//   - return number * 2 unless its a double number in which case return double number
//   - the stringnum.slice(2, 4) takes second and third index chars
// 
// data structure:
//   - convert number to stringnum
//   - perform operations and convert back to number
// 
// algorithm:
//   - get number length (convert to stringnum)
//   - if length is odd, multiply by 2 and return number
//   - if length is even, take left side and right side and compare
//   - if they are the same, return the original number
//   - if the are different, multiply by 2 and return number
// 
//   - take left side and right side and compare
//     - left side is (0, length/2)
//     - right side is (length/2, length)

function twice(num) {
  return isDoubleNumber(num) ? num : num * 2;
}

function isDoubleNumber(num) {
  var stringnum = String(num);
  var length = stringnum.length;
  var left = stringnum.slice(0, length / 2);
  var right = stringnum.slice(length / 2, length);
  
  return left === right;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
console.log(twice(103103));      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
