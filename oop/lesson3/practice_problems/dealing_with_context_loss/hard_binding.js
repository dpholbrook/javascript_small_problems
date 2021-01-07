// 1
// bind

let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);
// nothing, it will only return a function bound to obj

//3
let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(bar());

// 5 because the function bar is bound to obj

//4

let positiveMentality = {
  message: 'JavaScript makes sense!',
};

let negativeMentality = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positiveMentality);

negativeMentality.logMessage = bar;
negativeMentality.logMessage();

// our logMessage method from the negativeMentality object is assigned to bar which is permanently boud to positiveMentality
// so when we invoke that method, it returns the messge from positive mentality

let obj = {
  a: 'Amazebulous!',
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);

// the function bar has been permamently bound to obj so when we try to call it form otherObject it still calls it from obj
