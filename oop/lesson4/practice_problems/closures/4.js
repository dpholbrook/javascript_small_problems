// Given the following code:

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
// console.log(ready.status);
// let systemStatus = // ?
// How can you set the value of systemStatus to the value of the inner variable status without changing startup in any way?
// You can't. status is only available to the closure created by the anonymous function that is returned when startup is invoked.