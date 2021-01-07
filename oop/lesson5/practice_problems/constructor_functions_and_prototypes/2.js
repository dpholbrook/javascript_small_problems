let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area); 
console.log(rect1.perimeter);

// NaN
// NaN

// When our constructor function creates the area and perimeter properties of the rect1 object, it does so by invoking the area and perimeter methods
// on the RECTANGLE object. This object does not have width and height properties so these values return undefined and when multiplied return NaN

// We need to calle the area and perimeter methods from the context of the rect1 object to fix this