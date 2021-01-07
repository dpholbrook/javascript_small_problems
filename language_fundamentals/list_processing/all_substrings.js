// All Substrings
// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.
// 
// You may (and should) use the substringsAtStart function you wrote in the previous exercise:
// 
// Example:
// 
console.log(substrings('abcde'));
// 
// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
//
// input: string
// output: array of all substrings
//
// rules:
//  - order by substring start
//  - order by shortest to longest
//
// algorithm:
//  - split string into array of chars
//  - transform each character into substrings at start
//    - pass chars.slice(idx) to substringsAtStart
//  - flatten or flatMap
//  - return array
//
function substrings(string) {
  return [...string].flatMap((_, idx) => {
    return substringsAtStart([...string].slice(idx))
  });
}

function substringsAtStart(string) {
  return [...string].map((_, idx) => string.slice(0, idx + 1));
}
