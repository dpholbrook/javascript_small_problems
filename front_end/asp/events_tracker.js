/*
track function is the callback function for event listeners
  - takes a callback function as an argument
  - returns a new function
    - new function takes event as an argument
    - records the event in a tracker object

  tracker object
    - has list method that returns an array of events
    - has elements method which returns and array of the target elements
      - elements are the actual node objects
    - clear method
      - returns 0
      - makes list and empty array
    - list returns a copy of the array of elements
    
*/
// const divRed = document.querySelector('#red');
// const divBlue = document.querySelector('#blue');
// const divOrange = document.querySelector('#orange');
// const divGreen = document.querySelector('#green');

// const tracker = (() => {
//   const events = [];
//   return {
//     list() {
//       return events.slice();
//     },
//     elements() {
//       return this.list().map(({target}) => target);
//     },
//     add(event) {
//       events.push(event);
//     },
//     clear() {
//       events.length = 0;
//       return events.length;
//     },
//   };
// })();

// function track(callback) {
//   function isEventTracked(events, event) {
//     return events.includes(event);
//   }

//   return event => {
//     if (!isEventTracked(tracker.list(), event)) {
//       tracker.add(event);
//     }

//     callback(event);
//   };
// }

// divRed.addEventListener('click', track(event => {
//   document.body.style.background = 'red';
// }));

// divBlue.addEventListener('click', track(event => {
//   event.stopPropagation();
//   document.body.style.background = 'blue';
// }));

// divOrange.addEventListener('click', track(event => {
//   document.body.style.background = 'orange';
// }));

// divGreen.addEventListener('click', track(event => {
//   document.body.style.background = 'green';
// }));


let tracker = function() {
  let events = [];

  return {
    list() {
      return events.slice();
    },

    elements() {
      return events.map(event => event.target);
    },

    clear() {
      return events.length = 0;
    },

    add(event) {
      events.push(event);
    },
  };
}();

function track(callback) {
  return function(eventObject) {
    function duplicateEvent() {
      return tracker.list().includes(eventObject);
    }

    if (!duplicateEvent()) {
      tracker.add(eventObject);
    }

    callback(eventObject);
  }
}

// when we click blue, track is invoked and passed the callback function
// track returns a new function that is invoked with the event object passed to it
// this new function adds the event to tracker and then invokes the callback, passing it the evnt object


let divRed = document.querySelector('#red');
let divBlue = document.querySelector('#blue');
let divOrange = document.querySelector('#orange');
let divGreen = document.querySelector('#green');

divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  document.body.style.background = 'green';
}));

// tracker.list().length
// // 4
// tracker.elements()
// // [div#blue, div#red, div#orange, div#green]
// tracker.elements()[0] === document.querySelector('#blue')
// // true
// tracker.elements()[3] === document.querySelector('#green')
// // true
// tracker.clear()
// // 0
// tracker.list()
// // []
// tracker.list()[0] = 'abc'
// tracker.list().length
// 0