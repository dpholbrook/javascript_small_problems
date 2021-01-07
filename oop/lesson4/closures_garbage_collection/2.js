function makeHello(name) {
  return function() {
    console.log("Hello, " + name + "!");
  };
}

let helloSteve = makeHello("Steve");
// the closure created by invoking makeHello still has a reference to "Steve" so it can not be garbage collected