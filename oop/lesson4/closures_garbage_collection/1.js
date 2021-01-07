let a = 34;

function add(b) { // b is assigned to 4
  a += b;
  // a is reassigned to 38 so 34 can be garbage collected
}
// after function execution, 4 can be garbage collected because it can't be accessed outside of the function

function run() {
  let c = add(4); // undefined
}
// undefined can be garbage collected here 

run();
// after run executes, 34 can be garbage collected because a is not referenced after this
