// loop number times 
// when count is odd, log 1, otherwise log 0

function stringy(num) {
  var string = '';
  var i;

  for (i = 1; i <= num; i += 1) {
    if (i % 2 === 1) {
      string += 1;
    } else {
      string += 0;
    }
  }

  console.log(string);
  return string;
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
