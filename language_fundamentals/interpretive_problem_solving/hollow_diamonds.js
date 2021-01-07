/*
input: number N
output: log diamond

rules:
  - diamond has N rows and N columns
  - outerSpaces
     - 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5

  - first and last row are spaces, star, spaces
     - number of outer spaces is N / 2 rounded down
     - ' '.repeat(outerSpaces) + '*' + ' '.repeat(outerSpaces)
  - every other row is spaces, star, spaces, star, spaces
     -
     
 algorithm:
   iterate N times
     - if first or last row, log outerSpaces + star + outerSpaces
     - if other row, log outerSpaces + star + innerSpaces + star + outerSpaces

  outerSpaces
     - if top half (i <= Math.floor(N / 2))
     - (N / 2) - iteration
     - 5 = (11 / 2) - 0 (round down)
     - 4 = (11 / 2) - 1 (round down)
     - 3 = (11 / 2) - 2 (round down)
     - 2 = (11 / 2) - 3 (round down)
     - 1 = (11 / 2) - 4 (round down)
     - 0 = (11 / 2) - 5 (round down)
     - if bottom half
     - 1 = (6 - Math.floor(N / 2))
     - 2 7
     - 3 8
     - 4 9
     - 5 10

  innerSpaces
     - if not the first or last row
       - if first half (row <= Math.floor(N/2) 
          - inner spaces is (row * 2) - 1
 
     - 0
     - 1 1
     - 2 3
     - 3 5
     - 4 7
     - 5 9
      - if second half 
          - (N - 2) - ((row - half) * 2)
     (row - half) * 2
     - 6 7 2
     - 7 5 4
     - 8 3 6
     - 9 1 8
     - 10 

*/

function hollowDiamond(number) {
  for (let row = 0; row < number; row += 1) {
    let outerSpaceString = outerSpaces(row, number);
    if (row === 0 || row === number - 1) {
      console.log(outerSpaceString + '*' + outerSpaceString);
    } else {
      let innerSpaceString = innerSpaces(row, number);
      console.log(outerSpaceString + '*' + innerSpaceString + '*' + outerSpaceString);
    }
  }   
}

function outerSpaces(row, number) {
  let half = Math.floor(number / 2);
  let spaces;
  if (row <= half) {
    spaces = Math.floor((number / 2) - row);
  } else {
    spaces = row - half;
  }   
  return ' '.repeat(spaces);
}     

function innerSpaces(row, number) {
  let half = Math.floor(number / 2);
  let spaces;
  if (row <= half) {
    spaces = (row * 2) - 1;
  } else {
    spaces = (number - 2) - ((row - half) * 2)
  }   

  return ' '.repeat(spaces);
}

hollowDiamond(5);
//   *  
//  * *
// *   *
//  * *
//   *
hollowDiamond(11);
//      *             
//     * *    
//    *   *
//   *     *
//  *       *
// *         *
//  *       *
//   *     *
//    *   *
//     * *
//      * 


     

