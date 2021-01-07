let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func.call(turk);
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

// On line 11, we are invoking the getDescription method but doing so outside of the context of its object, in the global context.
// Because the global object does not have the properties specified in the getDescription method, they all return undefined.
// We could fix this in two ways, 
// 1. bind the function to method's context
// 2. call the function from the context of the method