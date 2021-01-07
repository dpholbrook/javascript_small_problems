// Return sum of ascii values
// String.prototype.charCodeAt()

// Loop through the string, sum ascii values and return result

function asciiValue(string) {
  var result = 0; 
  var i;

  for (i = 0; i < string.length; i += 1) {
    var char = string[i];
    result += char.charCodeAt();
  }
  
  console.log(result);
  return result;
}


asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
