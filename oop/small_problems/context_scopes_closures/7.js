function makeCounter() {
  let count = 1;

  return () => {
    console.log(count++)
  };
}

const counter = makeCounter();
counter();
// count will be garbage collected here even though the counter function has a reference to it
// this is because the program has finished executing so all values will be garbage collected, regardless of closures