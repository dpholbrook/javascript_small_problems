// without using Object.create

// write a method that returns an object whos prototype is the calling object

let foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function F() {}
  F.prototype = this;
  return new F();

  // return Object.setPrototypeOf({}, this);
}

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true