// Vigenere Cipher
// The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

// Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

// plaintext: Pineapples don't go on pizzas!
// keyword: meat

// Applying the Vigenere Cipher for each alphabetic character:
// plaintext : Pine appl esdo ntgo onpi zzas
// shift     : meat meat meat meat meat meat
// ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// result: Bmnxmtpeqw dhz'x gh ar pbldal!
// Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

// Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

// For a quick lookup of a ciphertext per character, you may consult this tabula recta. Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.

/*
input: string, keyword
output: string

rules:
  - keyword case does not matter
  - each letter in keyword is alpha representation of 0-25 (a: 0, z:25, A:0, Z: 25)
  - keyword letter shifts with each alpha char, but no other chars (space, number, etc)
  - only encrypt alpha chars
  - returned cipher text has spaces

datastructure:
  - input string
  - get number from each key char
  - pass number and char to caesarEncrypt
    - returns encrypted char
  - output string

algorithm:
  - create lookup array for keys
  - downcase and repeat key until at least as long as input string
  - iterate through input string
    - if char is alpha
      - get number from key char
      - pass char and number to ceasar
      - add encrypted char to result string
      - increment keyIdx 
    - if char not alpha
      - add char to result string
      - do not increment key idx
    - increment char idx
  
  hi ho
  fo xfox
*/

function vignereEncrypt(string, key) {
  const KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('');
  key = key.toLowerCase();
  let result = ''
  
  let keyIndex = 0;
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    let keyChar = key[keyIndex];
    
    if (/[a-zA-Z]/.test(char)) {
      let code = KEYS.indexOf(keyChar);
      result += (caesarEncrypt(char, code));
      
      keyIndex += 1;
      keyIndex = keyIndex % key.length;
    } else {
      result += char;
    }
  }
  
  return result;
}


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

console.log(vignereEncrypt('test', 'fox')); // 'yspy'
console.log(vignereEncrypt('hi ho', 'fox')); // 'mw et'
console.log(vignereEncrypt('test', 'foxhound')); // 'yspa'
console.log(vignereEncrypt('h7i h9o', 'fox')); // 'm7w e9t'
console.log(vignereEncrypt('h$i h&o', 'fox')); // 'm$w e&t'
console.log(vignereEncrypt('test', 'FoX')); // 'yspy'
