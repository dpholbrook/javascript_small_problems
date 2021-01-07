//1
function foo() {
  return this;
}

let context = foo();
console.log(context);

// this outputs the global execution context which is window
// the implicit execution context of a function invocation is the globlal object so foo() returns the global object referenced by this

//2 
// In strict mode, this references undefined instead of the global object, window, so the output is undefined

//3
let obj = {
  foo() {
    return this;
  },
};

let context = obj.foo();

console.log(context);

// output is obj
// the implicit execution context of a method call is the calling object so foo() returns obj which is referenced by this

//4
var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let bar = {
  message: 'Hello from the function scope!',
};

bar.deliverMessage = deliverMessage;

bar.deliverMessage();

// 'Hello from the global scope!'
// var creates a property of the global object and the implicit execution context of our function call is the globabl object so this.message
// returns the message property of the globol object which is logged

// we create a method that logs the message property of the execution context and then invoke that method
// the implicit execution context of a method invocatino is the calling object so 'Hello from the function scope!' is logged

//5
var a = 10;
let b = 10;
let c = {
  a: -10,
  b: -10,
};

function add() {
  return this.a + b;
}

c.add = add;

console.log(add());
console.log(c.add());

// The implicit execution context of the function invocation is the global object so the global property a is added to the variable b 
// in the lexical scope of the function which returns 20 which is logged

// The implicit execution context of the method invocation is the object c so it's property -10 is added to the variable b in its lexical scope
// which returns and logs 0.

// If var was replaced with let, we would get 
// NaN
// 0
// This is because unlike var, let does not create a property of the global object so this.a in the function invocation would be undefined

//6
// call and apply to explicitly set the function execution context

//7
let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add() {
     return this.a + this.b;
   },
};

bar.add.call(foo);
//3

//8
let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  let args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

outputList.apply(fruitsObj, fruitsObj.list);
outputList.call(fruitsObj, ...fruitsObj.list);


