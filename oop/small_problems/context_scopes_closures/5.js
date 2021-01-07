// function myBind(func, context) {
//   return function(...args) {
//     func.apply(context, args);
//   }
// }

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

function add(a, b) {
  return a + b;
}

// function myBind(func, context, boundArg) {
//   return function(...args) {
//     if (context === null) {
//       return func(boundArg, args[0]);
//     } else {
//       func.apply(context, args);
//     }
//   }
// }

function myBind(func, context, ...partialArgs) {
  return function(...args) {
    let fullArgs = args.concat(partialArgs);
    return func.apply(context, fullArgs);
  }
}

// this function can take a function to bind, a context to bind it to, and 0 or more arguments in addition
// we can use it to bind the input function to the input context without partial args
  // to do so, we call the function from the context, passing in the arguments array
// we can also use it for partial function application
  // in this case, the partial args passed to the generator function are combined with the args passed to the returned function
  // then the input function is called, with no context, but all of the arguments

// args will be array of args to apply to function
// OR args will be an argument that is the set argument
// the returned function should take one argument

let addOne = myBind(add, null, 1)
console.log(addOne(3));

