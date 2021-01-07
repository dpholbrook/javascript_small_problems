// 1
let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

myObject.myChildObject.myMethod();

// this is myChildObject which does not have a count property so undefined is retured

// 2
let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

myObject.myChildObject.myMethod.call(myObject);

// 3

let person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName() {
    console.log(this.firstName + ' ' + this.lastName +
                ' is the Amazing Spiderman!');
  },
};

let whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();

// logs Peter Parker is the Amazing Spiderman because the method has been removed from its context but then bound to the context of person 
// so, this in fullName points to the person object

let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());

//4

let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount.call(computer);
  }
};

console.log(computer.total());

// this in the specialDiscount function refers to the global context so this.price > 2000 always evaluates to false
// so a discount will never be applied and the functino will return 35000 no matter the price
// in order to fix it, we can call specialDiscount in the context of computer

let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    let specialDiscount = function() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }.bind(this);

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());

// we could also bind the special discount function to computer

let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    let self = this;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());

// or we could save this into the functions lexial scope using a local variable