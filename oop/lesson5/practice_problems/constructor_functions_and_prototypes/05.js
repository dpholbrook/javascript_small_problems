// Create a function neww, so that it works like the new operator. For this practice problem, you may use Object.create.

// neww takes a constructor function and array of arguments
// passes those arguments to the constructor function
// returns an object created by the constructor function

function neww(constructor, args) {
  let result = Object.create(constructor.prototype);
  constructor.apply(result, args);
  return result;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Other() {
  return 'the other';
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
// console.log(john);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}

let other = neww(Other);
console.log(other);
console.log(other.constructor);