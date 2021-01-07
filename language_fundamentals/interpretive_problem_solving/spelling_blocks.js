// Now I Know My ABCs
// A collection of spelling blocks has two letters per block, as shown in this list:
//
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do
// not use both letters from any given block. You can also only use each block once.
//
// Write a function that takes a word string as an argument, and returns true if
// the word can be spelled using the set of blocks, or false otherwise. You can
// consider the letters to be case-insensitive when you apply the rules.
//
// Examples:

/*
input: string
output: boolean

rules:
  - spelling blocks have two letters
  - word can only use each spelling block once
  - can't have two of the same letter
  - can't have tow letters from same block
  - case insensitive

algorithm:
  - downcase string
  - create an array of lowercase spelling blocks
  - iterate on spelling block array
  - each block should only have one match with lowercase string
  - if there is more than one match, return false
  - otherwise, return true
*/

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M

// function isBlockWord(string) {
//   const BLOCKS = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu', 'vi', 'ly', 'zm'];
//   string = string.toLowerCase();

//   return !BLOCKS.some(block => {
//     let regex = new RegExp(`[${block}]`, 'g');
//     matches = (string.match(regex) || []);
//     matches = matches.length;
//     return matches > 1;
//   })
// }

const LETTERS = "abcdefghijklmnopqrstuvwxyz";

function isBlockWord(string) {
  let usedIndices = [];
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i += 1) {
    let currentCharIndex = LETTERS.indexOf(string[i]) % 13;
    if (usedIndices.includes(currentCharIndex)) return false;
    usedIndices.push(currentCharIndex);
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('jess'));       // false
