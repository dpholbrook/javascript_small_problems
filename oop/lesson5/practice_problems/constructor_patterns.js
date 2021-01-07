// constructor functions have a capitalized first letter

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?
// this produces an error
// when we do not include the new keyword, the constructor function creates properties on the global object and the constructor function does not return anything
// so, lizzy is initialized to undefined and there is no scamper property on undefined