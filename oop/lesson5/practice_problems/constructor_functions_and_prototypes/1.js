let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo();

foo.bar();
Foo();

obj = {};
Foo.call(obj);
obj.bar();

console.log(this.a);

// 2 is logged from the context of the constructor function when we invoke it on line 13
// 2 is logged when we invoke bar on foo because the object that the constructor function returned that was assinged to foo on line 13 has the property a = 2
// 2 the property a is set to 2 in the global context and is logged from the global context when we invoke it on line 16, 
// 2 because we invoke foo from the context of te object, it defines properties on the object and logs 2
// 2 because properties are created on obj on line 19, when we invoke bar it logs 2
// undefined let does not create a property of the global object so this.a is undefined
