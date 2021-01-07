let myNum = 1;

function foo() {
  let myStr = 'A string';
  // 1 can not be garbage collected here because it is in the global scope and could be referenced later
  // 'A string' can not be garbage collected here because the function where it is referenced has not finished executing
}

foo();

// 1 still can not be garbage collected
// 'A string' can be garbage collected because there is no way to reference it outside of the function


// more code