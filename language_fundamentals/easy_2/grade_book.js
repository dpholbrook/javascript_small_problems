// innput: 3 numbers
// output: string grade
// 
// rules:
//   - average the three numbers and return a grade
// 
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

function getGrade(a, b, c) {
  var mean = (a + b + c) / 3;
  
  if (mean >= 90) {
    return 'A'; 
  } else if (mean >= 80) {
    return 'B';
  } else if (mean >= 70) {
    return 'C';
  } else if (mean >= 60) {
    return 'D';
  } else return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
