//  input: number
//  output: printed triangle

//  rules:
//    - input number is number of rows and columns

//  algorithm:
//    - loop from 1 to n
//    - print n - i spaces and i stars

//    - generate char
//      - pass in char type and number of chars
//      - loop through number of chars times
//      - push char to string with each iteration
//      - return string

function triangle(num) {
  var i;
  var spaces;
  var stars;

  for (i = 1; i <= num; i += 1) {
    spaces = generateChars(' ', num - i);
    stars =  generateChars('*', i);
    console.log(spaces + stars);
  }
}

function generateChars(char, times) {
  var result = '';
  var j;

  for (j = 1; j <= times; j += 1) {
    result += char;
  }

  return result;
}


triangle(5);
// 
//     *
//    **
//   ***
//  ****
// *****
// 
triangle(9);
// 
//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
