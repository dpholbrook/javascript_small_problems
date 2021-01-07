// Determine which string is longer and shorter
// Return shortlongshort
// If one string is empty, just return the other string 

function shortLongShort(str1, str2) {
  var short;
  var long;
  var result;
  
  short = str1.length < str2.length ? str1 : str2;
  long = str1 === short ? str2 : str1;
  result = short + long + short;

  console.log(result);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
shortLongShort('abc','abc')
shortLongShort('abc','xxx')
