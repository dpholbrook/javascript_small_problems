// Delete Vowels
// Write a function that takes an array of strings, and returns an array of the same strings values without the vowels (a, e, i, o, u).
// 
// Examples:
// 
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
//
// input: array of strings
// output: array of strings without vowels
//
// algorithm: 
//  - tranform array of strings
//    - for each string, return joined array of consonants
//    - if return value is null, then return empty string
//    - return the transformed array


function removeVowels(array) {
  return array.map(string => {
    let match = string.match(/[^aeiou]/gi); 
    if (match === null) return "";
    return match.join('');
  })
}
