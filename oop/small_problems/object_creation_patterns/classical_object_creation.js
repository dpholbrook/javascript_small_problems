// person constructor function creates several properties on objects
// person prototype has several methods that other constructor prototypes inherit from

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

// doctor constructor function creates specialization property
// doctor prototype is a person object
// doctor prototype's constructor is Doctor
// docotr prototype has diagnose method

let Doctor = function(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender, specialization);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}


// professor constructor function creates subject state
// professor prototype is person object
// professor prototypes constructor is Professor
// professor prototype has teach behavior

let Professor = function(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender, subject);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function() {
  console.log('Teaching');
}

// student constructor function has a degree state
// student prototype is person object
// student prototypes constructor is student
// student prototype has study behavior

let Student = function(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender, degree);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
  console.log('Studying');
}

// graduate student constructor function has graduate degree state
// graduate student prototype is student object
// grad student prototyp constructor is student
// grad student proto has research behavior

let GraduateStudent = function(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;
GraduateStudent.prototype.research = function() {
  console.log('Researching');
}

const person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
