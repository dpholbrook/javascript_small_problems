

function makeBank() {
  let accounts = [];

  function makeAccount(number) {
    let balance = 0;
    let transactions = [];
    
    return {
      deposit(amount) {
        balance += amount;
        transactions.push({type: 'deposit', amount});
        return balance;
      },
      withdraw(amount) {
        if (amount > balance) {
          amount = balance;
          balance = 0;
        } else {
          balance -= amount;
        }
        transactions.push({type: 'withdraw', amount});
        return amount;
      },
      balance() {
        return balance;
      },
      number() {
        return number;
      },
      transactions() {
        return transactions;
      }
    };
  }

  return {
    openAccount() {
      let account = makeAccount(accounts.length + 101);
      accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      source.withdraw(amount);
      destination.deposit(amount);
    },
  }
}

let bank = makeBank();
let account = bank.openAccount()
console.log(account);
account.deposit(100);
console.log(account.balance());

/*
Our make bank function returns a bank object that has methods to open accounts and transfer money between accounts.
The bank object has access to the makeAccount function because they are part of the closure formed by invoking makeBank.

*/
