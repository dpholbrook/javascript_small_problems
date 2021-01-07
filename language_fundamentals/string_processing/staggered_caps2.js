// Staggered Caps Part 2
// Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.
// 
// Examples:
// 
console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
//
// input: string
// output: string
//
// rules:
//  - upcase every other alpha char
//  - only count alpha chars
//
// algorithm:
//  - split chars into array of chars
//  - upper is true
//  - transform array of chars
//    - if char is not alpha, then return char
//    - if char is alpha
//    - if upper is true then upcase the char and set upper to false
//    - if upper is false then downcase the char and set upper to true
//  - join transformed array and return string
//
function staggeredCase(string) {
  let upper = true;

  return [...string].map(char => {
    if ((/[^a-z]/i).test(char)) {
      newChar = char;
    } else {
      if (upper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }  

      upper = !upper;
    } 

    return newChar; 
  }).join('');
}
