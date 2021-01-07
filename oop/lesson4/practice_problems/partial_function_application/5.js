// Consider the code below:

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

// rollCall('English', subjects.English)

// function makeMathRollCall() {
//   return function(students) {
//     return rollCall('Math', students);
//   }
// }

// let mathRollCall = makeMathRollCall();
// mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
// Implement makeMathRollCall such that it returns a partially applied rollCall function, with the subject as 'Math'.

function makeRollCall(targetSubject) {
  return function() {
    let students = subjects[targetSubject];
    return rollCall(targetSubject, students);
  }
}

let mathRollCall = makeRollCall('Math');
mathRollCall();
let englishRollCall = makeRollCall('English');
englishRollCall();