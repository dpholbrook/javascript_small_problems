let invoices = {
  unpaid: [],
  add: function(name, amount) {
    this.unpaid.push({ name, amount, });
  },
  totalDue: function() {
    return this.unpaid.reduce((sum, invoice) => {
      let due = invoice.amount;
      return sum + due;
    }, 0);
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices);
console.log(invoices.totalDue());
invoices.paid = [];
invoices.payInvoice = function(name) {
  let newArr = [];

  this.unpaid.forEach(invoice => {
    if (name === invoice.name) {
      this.paid.push(invoice);
    } else {
      newArr.push(invoice);
    }
  });

  this.unpaid = newArr;
}

console.log(invoices);
invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices);
invoices.totalPaid = function() {
  return this.paid.reduce((total, invoice) => {
    let paid = invoice.amount;
    return total += paid;
  }, 0);
}
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
