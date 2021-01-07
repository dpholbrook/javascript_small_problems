// function User(first, last) {
//   let user = {};

//   user.first = first;
//   user.last = last;
//   user.name = user.first + ' ' + user.last;

//   return user;
// }

// this solution does not work because the User function is not the constructor of the object and the User prototype is not the prototype of the returned object

function User(first, last) {
  if (this.constructor === User) {
    this.first = first;
    this.last = last;
    this.name = first + ' ' + last;
  } else {
    return new User(first, last);
  }
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe

console.log(user1.constructor);
console.log(Object.getPrototypeOf(user1));
console.log();
console.log();
console.log();