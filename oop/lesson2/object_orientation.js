function createItem(name, id, stock, price) {
  return {
    name,
    id,
    stock,
    price,
    setPrice(price) {
      if (price <= 0) {
        console.log('Price is invalid.');
      } else {
        this.price = price;
      }
    },
    describeProduct() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: ${this.price}`);
      console.log(`Stock: ${this.stock}`);
    }
  };
}

let scissors = createItem('Scissors', 0, 8, 10);
let drill = createItem('Cordless Drill ', 1, 15, 45);
let sponge = createItem('Sponge', 2, 10, 5);
let clock  = createItem('Clock', 3, 15, 755555);

scissors.describeProduct();
drill.describeProduct();
scissors.setPrice(11);
drill.setPrice(50);
scissors.describeProduct();
drill.describeProduct();
