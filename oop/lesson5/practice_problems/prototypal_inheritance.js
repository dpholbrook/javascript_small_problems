// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;

// console.log(bar.a);

// // this will log 1 becuse altough bar does not have its own property a, JavaScript will look all the way up the prototype chain
// // until it finds that property

// let foo = {};
// let bar = Object.create(foo);

// foo.a = 1;
// bar.a = 2;
// console.log(bar.a);

// // this will log 2 because bar has its own property a

let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

console.log(far.hasOwnProperty('myProp'));
console.log(far.myProp);       // 1

