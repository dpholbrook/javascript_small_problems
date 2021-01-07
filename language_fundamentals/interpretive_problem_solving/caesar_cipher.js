// Caesar Cipher
// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.
// 
// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.
//
// input: string and a number
// output: string
//
// rules:
//  - string can be many characters
//  - string is text to encrypt
//  - number is the key
//  - chars are substituted by char key positions away
//  - case is preserved
//  - key wraps if > 26
//    - ex 31 - 26  = 5
//  - non alpha chars remain unchanged
//  - if position in alphabet + key > 26, then we wrap around
//    - 25 + 5 = 30
//    - 30 - 26 = 4
//
// algorithm:
//  - split string into array of chars and transform array of chars into encrypted array of chars
//  - join and return string
//
//  - encrypt char
//    - if non alpha, return char
//    - otherwise, encrypt
//      - create string of alphabet characters
//      - if char is uppercase then downcase, convert, then upcase
//      - else convert
//
//      convert
//      - index is (index of char + key) % 26
//      - return char at index in string;
//
// const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
// const ALPHA_LENGTH = 26;

// function caesarEncrypt(string, key) {
//   return [...string].map(char => encrypt(char, key)).join('');
// }  

// function encrypt(char, key) {
//   if (/[^a-zA-Z]/.test(char)) return char;

//   let index = (ALPHA.indexOf(char.toLowerCase()) + key) % ALPHA_LENGTH;
//   let encryptedChar = ALPHA[index];
//   return /[A-Z]/.test(char) ? encryptedChar.toUpperCase() : encryptedChar;
// }  

function caesarEncrypt(str, keyVal) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let resultStr = '';

  // if (keyVal > alphabet.length) keyVal = keyVal % alphabet.length;

  let cypherLetter = function(letter) {
    let letterIdx = alphabet.indexOf(letter.toLowerCase());
    let newIdx = (letterIdx + keyVal) % alphabet.length;
    let cypherLetter = alphabet[newIdx];
    return /[A-Z]/.test(letter) ? cypherLetter.toUpperCase() : cypherLetter;
  };

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if (/[a-z]/i.test(char)) char = cypherLetter(char);
    resultStr += char;
  }

  return resultStr;
}

// Examples:
// 
// // simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"
// 
// // wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"
// 
// // all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"
// 
// // many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right? Wrong?', 2));
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
//
console.log(caesarEncrypt(''));
console.log(caesarEncrypt('3423452'));
console.log(caesarEncrypt('      '));
console.log(caesarEncrypt('@$*)#'));
//
