// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s
// 
// The sum of the integers between 1 and 5 is 15.
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p
// 
// The product of the integers between 1 and 6 is 720


var num;
var operation;
var result;
var i;

function computeSum() {
  result = 0;
  
  for (i = 1; i <= num; i += 1) {
    result += i;
  }
}

function computeProduct() { 
  result = 1;
  for (i = 1; i <= num; i += 1) {
    result *= i;
  }
}

while (true) {  
  num = parseInt(prompt('Please enter an integer greater than 0'));
  if (num === parseInt(num) && num > 0) {
  break;
  }
}


while (true) {  
  operation = prompt('Enter "s" to compute the sum, or "p" to compute the product');
  if (operation === 's' || operation === 'p') {
  break;
  }
}

if (operation === 's') {
  computeSum();
  operation = 'sum';
} else if (operation === 'p') {
  computeProduct();
  operation = 'product';
}

console.log(`The ${operation} of the integers between 1 and ${num} is ${result}`);

