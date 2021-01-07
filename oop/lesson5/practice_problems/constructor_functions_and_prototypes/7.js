let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object

// let ninjaB = ninjaA; // this does not work because ninjaA is assigned to a ninja object and ninjaB is assigned to that same object, we are not creating a new one

// let ninjaB = new ninjaA.constructor();

// let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
console.log(ninjaB === ninjaA);