// Seeing Stars
// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

/*
input: n odd integer greater than 7
output: 8 pointed star

rules:
  - n rows and n columns
  - each row except middle has 3 stars
7
0, 3, 6
1, 3, 5
2, 3, 4
all rows
2, 3, 4
1, 3, 5
0, 3, 6

  - do this half times:
  - half is n / 2 rounded down
  - left starts at 0 and counts up to half with each iteration
  - right starts at n -1 and counts down to half with each iteration
  - generate array with n elements that are spaces
  - array[3] is a *
  - set array left and right to *
  - join array and log
  
  
  bottom
  - left starts at n-1 and decreases each time
  - right starts at n+1 and increases each time
*/

function generateTop(n) {
  let half = Math.floor(n / 2);
  // console.log(half);
  let left = 0;
  let right = n - 1;
  let template = [];
  template.length = n;
  template.fill(' ');
  template[half] = '*';
  // console.log(array);
  for (let row = 0; row < half; row += 1) {
    let result = template.slice();
    result[left] = '*';
    result[right] = '*';
    console.log(result.join(''));
    left += 1;
    right -= 1;
  }
}

function generateBottom(n) {
  let half = Math.floor(n / 2);
  // console.log(half);
  let left = half - 1;
  let right = half + 1;
  let template = [];
  template.length = n;
  template.fill(' ');
  template[half] = '*';
  // console.log(array);
  for (let row = 0; row < half; row += 1) {
    let result = template.slice();
    result[left] = '*';
    result[right] = '*';
    console.log(result.join(''));
    left -= 1;
    right += 1;
  }
}

function generateMiddle(n) {
  console.log('*'.repeat(n));
}

function star(n) {
  generateTop(n);
  generateMiddle(n);
  generateBottom(n);
}
// Examples:

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *