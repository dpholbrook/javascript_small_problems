// Leading Substrings
// Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.
// 
// Examples:
// 
console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
//
// input: string
// output: array of substrings
//
// algorithm:
//  - split string into array of chars
//  - transform array of chars in to array of substrings
//    - slice substring from input string
//    - string.slice(0, idx + 1)
//
function substringsAtStart(string) {
  return [...string].map((char, idx) => string.slice(0, idx + 1));
}
