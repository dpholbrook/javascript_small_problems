// Letter Counter Part 1
// Write a function that takes a string consisting of one or more space separated words, and returns an object that shows the number of words of different sizes.
// 
// Words consist of any sequence of non-space characters.
// 
// Examples:
// 
console.log(wordSizes('Four score and seven.'));                       
// // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  
// // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              
// // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            
// // {}
//
// input: string of space separated words
// output: object with count of word lengths
//
// rules: 
//  - key is letter count
//  - value is number of words with that letter count
//  - any char counts as a letter
//
//  algorithm:
//    - split string into array of words
//    - for each word
//      - count chars
//      - if result object has key that matches letter count then add 1 to its vale//      - if result does not have key with letter count, then create key with value of 1
//      - return result object
//
// function wordSizes(string) {
//   var result = {};
//   var wordArr = string.split(' ');
//   var length;
// 
//   if (string.length === 0) return result;
// 
//   wordArr.forEach( (word) => {
//     var length = (word.length);
//     if (result[length]) {
//       result[length] += 1;
//     } else {
//       result[length] = 1;
//     } 
//   });
//   
//   return result;
// }
function wordSizes(words) {
  var wordsArray = words.split(' ');
  var count = {};
  var wordSize;
  var i;

  for (i = 0; i < wordsArray.length; i += 1) {
    wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}
