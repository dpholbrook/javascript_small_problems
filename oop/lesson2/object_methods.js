let me = {
  firstName: 'Drew',
  lastName: 'Holbrook',
};

let friend = {
  firstName: 'Cosmo',
  lastName: 'Langsfeld',
};

let mother = {
  firstName: 'Christine',
  lastName: 'Holbrook',
};

let father = {
  firstName: 'Fred',
  lastName: 'Holbrook'
};

let people = {
  collection: [],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  nextId: 1,

  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
    person.id = this.nextId;
    this.collection.push(person)
    this.nextId += 1;
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach((comparator, idx) => {
      if (comparator.firstName === person.firstName &&
          comparator.lastName === person.lastName) {
        index = idx;
      }
    });

    return index;
  },

  remove: function(person) {
    let index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  isInvalidPerson: function(person) {
    return typeof person.firstName !== 'string' || typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
}
people.add(mother);
people.add(father);
people.rollCall();
console.log(people);

