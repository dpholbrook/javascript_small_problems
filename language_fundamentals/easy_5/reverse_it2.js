// Reverse It Part 2
// Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.
// 
// Examples:
// 
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
//
// input: string of words
// output: string of words
//
// rules:
//  - reverse any word with 5 or more chars

// algorithm:
//  - split string into array of words
//  - transform array of words
//    - if word has 5 or more chars, split it into an array of chars, reverse the array, join chars back into word
//    - otherwise return original word
//  - join transformedarray of words into string and return it
//
function reverseWords(string) {
  return string.split(' ').map(word => {
    if (word.length >= 5) {
      return [...word].reverse().join('');
    } else return word;
  }).join(' ');
}
