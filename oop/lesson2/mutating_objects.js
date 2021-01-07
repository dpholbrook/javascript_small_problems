let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message);
console.log(message);

// Hello from the function scope!
// Hello from the global scope!

let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj);

console.log(myObj.message);

// 'Greetings from the function scope is logged twice.'
// Before, we were reassigning the function local variable to a new primitive value
// which did not affect the primitive value referenced by the variable in the global
// scope
// In this case, we are mutating the object passed in to the function and the affects can be seen from within the function or global scope

let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func();
console.log(message);

// This will also log 'Hello from the function scope twice'. Our function has access to the message variable in the global scope and reassigns it to the new message which is then logged from within the function and in the global scope.

let a = 10;
let obj = {
  a
}
let newObj = obj;
newObj.a += 10;

console.log(obj.a === a);
console.log(newObj === obj);

//false
//true
// We are reassignging the property a in newObj to a new value, not mutating the value referenced by the variable a (we can't since numbers a primitive data types). So, the local variable and the property now reference two different values. 
// newObj and obj store references that point to the same object so the changes made to newObj also change obj. Because they are the same object, they are equal.

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timom',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true

// warthog references the object originally referenced by animal but we reassign animal to a different object so we get false
