let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

ninja2 = new Ninja();

console.log(ninja2.swingSword()); // true
console.log(ninja.swingSword()); // error


// TypeError swingSword is not a function
// We created the ninja object and then changed the prototype of the Ninja constructor function to a different object with a new method
// The ninja object still has the original prototype that does not have the swingSword method so we get an error
// Only objects created after the prototype has been changed will have that prototype in their prototype lookup chain and acess to the new method

