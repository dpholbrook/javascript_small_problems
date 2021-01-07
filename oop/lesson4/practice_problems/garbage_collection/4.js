function makeEvenCounter() {
  let index = 0;
  return function() {
    return index += 2;
  };
}

let evenCounter = makeEvenCounter();

// is 0 eligible for GC here?
// no. the even counter function encloses index and its value 0 so it has a reference to the value 0.
// if evenCounter were invoked, index would be reassigned to 2 and 0 could then be garbage collected.

// more code