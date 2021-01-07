/*
item creator - validates items being created
item manager - creates, updates, deletes, queries
report manager - generates reports on items, creates report objects

ItemsManager object
  - creates items object that have valid input
    - presumably these are objects with the following properties:
      - sKU
      - item Name
      - category 
      - quantity

  - adds valid created items to an items data collection
  - an item is a product, of which there can be numerous quantities
  - update takes SKU and object that is used to update item accordingly
  - inStock returns list of item objects that are in stock
  - itemsInCatgory returns list of item objects that match that category
  - delete takes a SKU and deletes that item object from collection of items

ReportManager
  - init method takes ItemManager object
  - reportInStock logs the names of the items that are in stock
  - createReporter takes a SKU and creates a reporter object for that item object
    - these reporter ojects have a state (their item)
    - they share behavior (.itemInfo)

itemReporter
  - itemInfo logs all of the info for that item on separate lines
    - changes to this item by the item manager are reflected (the item object is mutated)


solution variation
I used a constructor function and they used an IIFE. 
Invoking my constructor function returns an item object that has private methods.
(It seems like they are private)
Their IIFE returns a constructor function that has access to the private methods. 

*/

// this constructor function returns an item that uses private functions
// to validate input
// its prototype is an ItemCreator object
// the prototype of ItemCreator.prototype is Object.prototype
// the constructor function is ItemCreator

let ItemCreator = function() {
  function validItem(name, category, quantity) {
    if (validName() && validCategory() && validQuantity()) {
      return true;
    } else {
      return false;
    }

    function validName() {
      let length = name.replace(/ /g, '').length;
      return length >= 5;
    }

    function validCategory() {
      if (category.length < 5 || category.includes(' ')) {
        return false;
      } else {
        return true;
      }
    }

    function validQuantity() {
      return quantity >= 0;
    }
  }

  function createSKU(name, category) {
    let first = name.replace(/ /g, '').slice(0, 3); 
    let second = category.slice(0, 2);

    return (first + second).toUpperCase();
  }

  return function(name, category, quantity) {
    if (validItem(name, category, quantity)) {
      this.itemName = name;
      this.category = category;
      this.quantity = quantity;
      this.skuCode = createSKU(name, category);
    } else {
      return {notValid: true};
    }
  }
}();

let ItemManager = {
  items: [],

  create(name, category, quantity) {
    let item = new ItemCreator(name, category, quantity)
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
    }
  },

  update(SKU, obj) {
    let key = Object.keys(obj)[0];
    let value = Object.values(obj)[0];

    this.items.forEach(item => {
      if (item.skuCode === SKU) {
        item[key] = value;
      }
    });
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },

  delete(sku) {
    let index;
    this.items.forEach((item, idx) => {
      if (item.skuCode === sku) {
        index = idx;
      }
    });

    this.items.splice(index, 1);
  }
};

let ReportManager = function() {
  let items;

  return {
    init(ItemManager) {
      items = ItemManager.items;
      return this;
    },
  
    reportInStock() {
      let result = items.filter(item => item.quantity > 0)
                                         .map(item => item.itemName);
  
      console.log(result.join(', '));
    },
  
    // this method returns a reporter object for an item
    // itemInfo logs the info for that item
  
    createReporter(sku) {
      // let context = this;
      return {
        itemInfo() {
          let item = items.filter(item => item.skuCode === sku)[0];
          let keys = Object.keys(item);
          keys.forEach(key => {
            console.log(`${key}: ${item[key]}`);
          });
        },
      };
      // return Object.create(Reporter);
    }
  }
}();



ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// // returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// // logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10











//////////////////

// ItemManager.create('basket ball', 'sports', 0);           // valid item
// // console.log(ItemManager.items);
// console.log(ItemManager.items[0]);
// console.log(ItemCreator.prototype);
// console.log(Object.getPrototypeOf(ItemCreator.prototype));
// console.log(ItemCreator);
