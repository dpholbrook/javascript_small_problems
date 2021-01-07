// Follow the steps below:

// Create an object called shape that has a getType method.
// Define a Triangle constructor function whose prototype is shape. Objects created with Triangle should have four own properties: a, b, c (representing the sides of a triangle), and type.
// Add a new method to the prototype called getPerimeter.
// Test your implementation with the following code:

let shape = {
  getType: function() {
    return this.type;
  },
};

let Triangle = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"