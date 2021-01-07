function whatIsMyContext() {
  return this;
}

// The function needs to be invoked in order for there to be context.

function whatIsMyContext() {
  return this;
}

whatIsMyContext();

// this points to the global object (window in the browser) or undefined in strict mode

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }

    baz();
  }

  bar();
}

foo();

// this points to the global object because it is a function invocation

let obj = {
  count: 2,
  method() {
    return this.count;
  },
};

obj.method();

// when we invoke a method, this refers to the calling object. in this case, 2 is returned. 

function foo() {
  console.log(this.a);
}

let a = 2;
foo();

// an error is thrown because this is the global object which resolves to undefined in strict mode 
// undefined.a throws an error

let a = 1;
function bar() {
  console.log(this.a);
}

let obj = {
  a: 2,
  foo: bar,
};

obj.foo();

// 2
// the property foo is assigned ot the bar function which will log this.a
// we invoke the foo method on object and this points to foo because the execution context of any method call is the calling object
// obj has the property a with a value of 2 so 2 is logged

let foo = {
  a: 1,
  bar() {
    console.log(this.baz());
  },

  baz() {
    return this;
  },
};

foo.bar(); // logs object foo
let qux = foo.bar; // error 
qux();

// calling the bar method on foo logs the foo object because this resolves to the calling object
// we assign the bar function to qux and then invoke qux
// when we invoke the bar function assigned to quix, this refers to the global context which does not have a property baz so it evaluates to undefined
// we then try to invoke undefined as a function which raises an error