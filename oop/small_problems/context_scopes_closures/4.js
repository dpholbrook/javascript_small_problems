// Our very own bind()
// Function.prototype.bind is a method on all function objects that allows us to hard-bind a function to a particular object. The way this works is that you pass a context object to the bind method and it returns a new function that is essentially the same function but hard-bound to the context object supplied.

// Create a function myBind, that accepts two arguments: 1) The function to bind, 2) The context object, and returns a new function that's hard-bound to the passed in context object.

function myBind(func, context) {
  return function(...args) {
    func.apply(context, args);
  }
}

let person1 = {
  name: 'drew',
  sayName(addOn) {
    console.log(this.name + addOn);
  }
}

let person2 = {
  name: 'molly',
  sayName(addOn) {
    console.log(this.name + addOn);
  }
}

let mollySayName = myBind(person1.sayName, person2);

mollySayName('Dolly');
