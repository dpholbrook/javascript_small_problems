let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let getTurkDescription = func.bind(turk);
  console.log(getTurkDescription());
}

logReturnVal(turk.getDescription);