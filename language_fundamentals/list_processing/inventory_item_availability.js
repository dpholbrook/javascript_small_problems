// Inventory Item Availability
// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.
// 
// You may (and should) use the transactionsFor function from the previous exercise.
// 
// input: item id number, array of transaction objects
// output: boolean
//
// rules:
//  - return true if quantity of item is greater than 0
//  - else return false
//  - in is negative
//  - out is positive
//
// algorithm:
//  - filter array for inventory item
//  - reduce the quantity
//  - if reduction is > 0 return true otherwise return false
//
// Examples:
// 
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
//
//
function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
}

function isItemAvailable(id, transactions) {
  const quantity = transactionsFor(id, transactions).reduce((sum, transaction) => {
    if (transaction.movement === 'in') {
      return sum + transaction.quantity;
    } else {
      return sum - transaction.quantity;
    }  
  }, 0);

  return quantity > 0;
}
