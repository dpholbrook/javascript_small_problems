// input: string
// output: print multiple lines

// rules:
//   - top/bottom is (plus, dash, sring length dashes, dash, plus)
//   - padding is (verical line, space, string length spaces, space, vertical line)
//   - body is same as padding with string instead of string legth spaces

//algorithm:
//  - calculate string.length
//  - print top
//  - print padding
//  - print body
//  - print padding
//  - print bottom

//  - build padding
//    - loop through string and add a space for each char

function logInBox(string) {
  var topBottomFill = draw(string, '-');
  var topBottom = `+-${topBottomFill}-+`
  var paddingFill = draw(string, ' ');
  var padding = `| ${paddingFill} |`
  var body = `| ${string} |`
  var lines = [topBottom, padding, body, padding, topBottom];

  lines.forEach(element => console.log(element));
}

function draw(string, element) {
  var i;
  var result = '';

  for (i = 0; i < string.length; i += 1) {
    result += element
  }

  return result;
}

logInBox('To boldly go where no one has gone before.');
// 
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
// 
logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+
