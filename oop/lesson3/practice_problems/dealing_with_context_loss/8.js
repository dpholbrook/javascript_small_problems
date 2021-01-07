let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);

// 0. 
// increment is an internal function so it loses context and this refers to the global object. 
// so, this.a does not increment the property of the foo object