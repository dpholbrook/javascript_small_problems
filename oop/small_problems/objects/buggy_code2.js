// Buggy Code 2
// A grocery store uses a JavaScript function to calculate discounts on various items. They are testing out various percentage discounts but are getting unexpected results. Go over the code, and identify the reason why they aren't getting the expected discounted prices from the function. Then, modify the code so that it produces the correct results.

const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    let newPrice = this.price - discount;

    return newPrice;
  },
};
console.log(item.discount(20))   // should return 40
// 40
console.log(item.discount(50))   // should return 25
// 20
console.log(item.discount(25))   // should return 37.5
// 15
//
// The item object is being mutated (price is changing). We just want to calculate and return a new price.
