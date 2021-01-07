// How Many
// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.
// 
// Example:
// 
const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];
// 
countOccurrences(vehicles);
// 
// // console output
// // car => 4
// // truck => 3
// // SUV => 1
// // motorcycle => 2
//
// input: array
// output: log element with number of occurences
//
// algorithm:
//  - iterate through array incrementing value if key of current element exists or creating new key with a value of one if element does not exist in object
//
function countOccurrences(arr) {
  result = {};

  arr.forEach(value => {
    if (result[value]) {
      result[value] += 1;
    } else {
      result[value] = 1;
    }  
  });

  logCounts(result); 
}

function logCounts(counts) {
  for (let value in counts) {
    console.log(`${value} => ${counts[value]}`);
  };
}
