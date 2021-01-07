// input: number
// output: number

// rules:
//  - sum numbers that are multiples of 3 or 5 from 1 up to input number (inclusive)

// examples:
//  - 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)

// algorithm:
//  - count up from 3 to input number
//  - if count is divisible by 3 or 5, add it to result

function multisum(limit) {
  var result = 0;
  var i;

  for (i = 1; i <= limit; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  
  console.log(result);
  return result;
}


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
