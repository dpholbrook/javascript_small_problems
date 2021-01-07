/*
input: parent (node), child selector (STRING), event (string), callback (function) 

rules:
  - if parent node is not a node, return undefined
  - if the parent node is a node, add the listener
  - the listener is added to the parent node
  - if parent node contains the selector node, the callback is added
    - BUT if selector node is parent node
      - handler does not fire if parent node is clicked
      - handler only works on children of parent node, not on parent node

  - parent handler works for grandchildren, etc
  - parent handler works for multiple children of selector type

  - if we add a handler to a parent that has no children, it still gets the handler, then when we add a child that matches the selector, the handler works for that child

algorithm:
  - if parent node doesn't exist, return undefined
  - add the listener to the parent
  - listener
    - listener is registered to parent (currentTarget)
    - any elements click will fire the listener
    - callback1 checks to see if selector child element exists
      - if it does, it fires the callback which alerst the message
      - else callback is not fired


  - currently we add handler to parent and if child existis, we call the callback for any element within the parent element that is clicked
  - we only want the callback if the target is the child

  - right now when i click, the parent handler fires the callback for each child
  - instead, i want to make sure the target is a descendant and then fire the callback only once

  - click on parent element
  - is target a match for children?
  - if so fire callback

  get descendant
    - this is the queired node from parent node
  if descendant
    - check to see if target tag name === descendant tag name
      - if so, fire callback
*/

// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

function delegateEvent(node, selector, eventName, callback) {
  if (node && node instanceof Element) {
    node.addEventListener(eventName, (eventObject) => {
      let descendants = [...node.querySelectorAll(selector)];
      if (descendants.includes(eventObject.target)) {
        callback(eventObject);
      }
    });
  
    return true;
  }
}

delegateEvent(element3, 'aside p', 'click', callback);

