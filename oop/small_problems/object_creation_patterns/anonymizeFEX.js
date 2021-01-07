/*
FEX (unsolved)

Problem: 
Our Account prototype object's methods have a closure over the private data.
Each time we create a new object from the prototype, the private data changes to represent that object.
Because all objects delegate to the prototype object to access this data, they are all referencing the same private data in the same closure.

We can move the private data inside of the init function and have ... no this wont work

We could put private data inside of a IIFE that has 

The methods of the prototype object need to be called from the context of the object.
Each object needs its own context (IIFE) that it is created in.

The solution below of using init as a closure that contains all of the data works. The problem is that now each object instance has all of the methods. They are not shared.  

*/

let Account = function() {
  function getRandomLetterNumber() {
    const randomIndex = Math.floor(Math.random() * 62);
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[randomIndex];
  }

  function anonymize() {
    let result = '';

    for (let i = 0; i < 16; i += 1) {
      result += getRandomLetterNumber();
    }

    return result;
  }

  function isValidPassword(password, userPassword) {
    return userPassword === password
  }

  return {
    init(userEmail, userPassword, userFirstName, userLastName) {
      this.displayName = anonymize();

      this.reanonymize = function(password) {
        if (isValidPassword(password, userPassword)) {
          this.displayName = anonymize();
          return true;
        } else {
          return 'Invalid Password';
        }
      }.bind(this);

      this.resetPassword = function(password, newPassword) {
        if (isValidPassword(password, userPassword)) {
          userPassword = newPassword;
          return true;
        } else {
          return 'Invalid Password';
        }
      }.bind(this);

      this.email = function(password) {
        if (isValidPassword(password, userPassword)) {
          return userEmail;
        } else {
          return 'Invalid Password';
        }
      }.bind(this);

      this.firstName = function(password) {
        if (isValidPassword(password, userPassword)) {
          return userFirstName;
        } else {
          return 'Invalid Password';
        }
      }.bind(this);

      this.lastName = function(password) {
        if (isValidPassword(password, userPassword)) {
          return userLastName;
        } else {
          return 'Invalid Password';
        }
      }.bind(this);

      return this;
    }, 
  }; 
}();

const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

const displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

const bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // should log foo.
console.log(fooBar.email('abc'));                  // should 'foo@bar.com'
console.log(bazQux.firstName('123456'));              // should log baz.
console.log(bazQux.email('123456'));                  // should log baz@qux.com

console.log(fooBar);
console.log(bazQux);


// let Person = function() {
//   let personName;

//   return {
//     init(name) {
//       personName = name;
//       return this;
//     },

//     sayHi() {
//       console.log(`Hello there, my name is ${personName}!`);
//     },
//   };
// }();

// let drew = Object.create(Person).init('drew');
// drew.sayHi();

// let fred = Object.create(Person).init('fred');
// drew.sayHi();
// fred.sayHi();

