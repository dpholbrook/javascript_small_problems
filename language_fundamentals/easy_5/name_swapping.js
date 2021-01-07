// Name Swapping
// Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.
// 
// Examples:
// 
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Jim Joe Jed Ricky Roberts'));    // "Roberts, Joe"
//
// input: string
// output: string
//
// rules:
//  - new string is last word, comma, space, first word
//
// algorithm:
//  - split string into array of words and piece back together
//
function swapName(string) {
  let wordArr = string.split(' ');
  let result = String(wordArr.splice(wordArr.length - 1, 1)) + ',';
  for (let i = 0; i < wordArr.length; i += 1) {
    result += ' ' + wordArr[i];
  };

  return result;
}
