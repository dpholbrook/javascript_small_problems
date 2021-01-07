// Diamonds
// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.
// 
// input: odd integer
// output: log diamond
//
// rules:
//  - top half:
//  - diamond is n tall and n wide
//  - each line has spaces stars spaces
//  - spaces starts at (n - 1) / 2
//  - decrements by 1 each line
//  - stars starts at 1
//  - increments by 2 each time
//
//  - spaces increase by one each time
//  - starts decrease by one each time
//
//
//

//      
//      
//
//
// Examples:
// 
// diamond(1);
// // logs
// *
diamond(3);
// // logs
//  *
// ***
//  *
// diamond(9);
// // logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
//
function diamond(n) {
  topHalf(n); 
}

function topHalf(n) {
  let stars = 1;
  let spaces = (n -1) / 2;

  for (let i = 1; i <= n; i += 1) {
    console.log(stars, spaces)
    stars += 2;
    spaces += 1;
  };
}
//
// algortihm:
//  - top half
//    - stars is 1
//    - spaces is (n - 1) / 2
//    - loop from 1 to n
//      - log spaces stars spaces
//      - increment stary by 2
//      - decrement spaces by 1
//
//  - bottom half
//    - stars is n - 1
//    - spaces is 1
//    - loop until stars are 0
//      - log spaces stars spaces
//      - decrement stars by 2
//      - increment spaces by 1
