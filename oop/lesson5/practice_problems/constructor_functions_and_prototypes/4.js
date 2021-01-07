let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja(); // creates a new ninja object with a swung property

Ninja.prototype.swingSword = function() {
  return this.swung;
};

// we create a swingSword method on the nija prototype that will return the swung property value

console.log(ninja.swingSword()); // true;
console.log(Ninja.prototype.swingSword()); // undefined because Ninja.prototype does not have the swung property

