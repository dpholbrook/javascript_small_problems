// What is This
// Read the following code carefully. What do you think is logged on line 7. Try to answer the question before you run the code.

// const person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName: this.firstName + this.lastName,
// };

// console.log(person.fullName); // NaN

// We would think that this in an object property would refer to the object. 
// In this case however, this is not in a function so it refers to the global object
// this is the function execution context and there isn't any in this case

var firstName = 'Don';
var lastName = 'Juan';

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName); // Don Juan (in the browser)



// let person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName() {
//     console.log(this.firstName + this.lastName);
//   },
// };

// person.fullName(); // Rick Sanchez
// when we invoke a method the implicit function execution context is the calling object


// let person = {
//   firstName: 'Rick ',
//   lastName: 'Sanchez',
//   fullName() {
//     return this.firstName + this.lastName;
//   },
// };

// console.log(person.fullName()); // Rick Sanchez

