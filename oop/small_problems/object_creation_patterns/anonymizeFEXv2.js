let Account = function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

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

  function isValidPassword(password) {
    return userPassword === password
  }

  return {
    init(...args) {
      this.displayName = anonymize();
      this.data = function() {
        return args;
      }();
      return this;
    }, 

    test() {
      console.log(this.data);
    },
  
    reanonymize(password) {
      if (isValidPassword(password)) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },
  
    resetPassword(password, newPassword) {
      if (isValidPassword(password)) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    email(password) {
      if (isValidPassword(password)) {
        return userEmail;
      } else {
        return 'Invalid Password';
      }
    },

    firstName(password) {
      if (isValidPassword(password)) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName(password) {
      if (isValidPassword(password)) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },
  }; 
}();

const fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// fooBar.test();
console.log(fooBar.data);
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// const displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// const bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// console.log(fooBar.firstName('abc'));              // logs 'baz' but should log foo.
// console.log(fooBar.email('abc'));                  // 'baz@qux.com' but should 'foo@bar.com'

