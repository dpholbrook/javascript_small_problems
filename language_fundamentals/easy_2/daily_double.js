// collapse duplicate consecutive chars

// loop through string 
// add current char to result unless last char in result === current char

function crunch(string) {
  var result = '';
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (result.slice(-1) !== string[i]) {
      result += string[i];
    }
  }

  console.log(result);
  return result;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
