let Person = function(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

Person.prototype.communicate = function() {
  console.log('Communicating');
}

Person.prototype.eat = function() {
  console.log('Eating');
}

Person.prototype.sleep = function() {
  console.log('Sleeping');
}

let Doctor = function(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender, specialization);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

let Professor = function(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender, subject);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function() {
  console.log('Teaching');
}

let Student = function(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender, degree);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
  console.log('Studying');
}

let GraduateStudent = function(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.research = function() {
  console.log('Researching');
}

///////////////

/*
make extend function that takes two objects as arguments
first object is object to extend
second object is mixin

use apply to add mixin to object

mixin
object that has methods
invoice
  - logs full name is billing customer
payTax
  - loge full name is paying taxes

delegate takes the mixin method and returns a function that 
that functino calls the mixin method from the context of the object
*/

function delegate(mixinObject, method, obj) {
  return function () {
    mixinObject[method].call(obj)
  }
}

function extend(obj, mixinObject) {
  Object.keys(mixinObject).forEach(method => {
    obj[method] = delegate(mixinObject, method, obj);
  })

  return obj;
}

// when one of these methods is updated, we want the update to exist in objects that have this object mixed in
// in other words, the objects methods need to have a closure over the method

// professional is a mixin object with methods
// when we add that object to another, we want those new methods to have a closure over the mixin methods
// invoice 

// we want the methods of the object to reference a function

// we reassign invoice in the mixin and want that to show up in the object

let professional = {
  invoice() {
    console.log(`${this.fullName()} is billing customer`);
  },

  payTax() {
    console.log(`${this.fullName()} is paying taxes`);
  },
}



const doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'S
doctor.diagnose();                         // logs 'Diagnosing'

const professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
// we have added the invoice and payTax methods to doctor and professor
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(`${this.fullName()} is Asking customer to pay`);
};
// here we change the invoice method and that change needs to be carried to the doctor and professor objects

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'
