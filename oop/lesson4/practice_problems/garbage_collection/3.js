let outerFoo;

function bar() {
  let innerFoo = 0;
  outerFoo = innerFoo;
}

bar();

// can outerFoo's 0 be garbage collected here?
// no. innerFoo 0 can be garbage collected because it can't be referenced outside of the function
// but outerFoo references a copy of 0 and is available on in the global scope and could be referenced later

// more code