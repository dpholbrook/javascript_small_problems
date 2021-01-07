/*
When we click on an anchor element, we add highlight class to the article that it takes us to
We remove highlight from any element that has highlight class

When we click on an article element, it gets the highlight class
Any element with highlight hass the class removed

When we click anywhere else, highlight class is added to main element
highlight is removed from any element that has it

add click event listener to ul
if an element has class highlight, remove it
the href of the target is the id of the element that gets the class highlight
extract the id from the href
query for that id
set the class of that element to hidden

add click event listeners to all of the children of main if they are an article element
stop propagation
unhighlight
current target gets highlighted

add click event listener to h1 in main
stop propagation
if an element has class highlight, remove it
add highlight class to main element

add a click event listener to body
if an element has class highlight, remove it
add highlight class to main element


their solution
- highlight
  -if the target is an anchor then get id and set corresponding article as element to highlight
  - otherwise, element to highlight is main

- we then put click highlight event listeners on the ul and on the entire document
- so, if somebody clicks on an anchor, it will highlight the article and if somebody clicks anywhere else, it will highlight main
- we still need to be able to click an article and have it highlight itself instead of main
*/
let ul = document.querySelector('ul');
let main = document.querySelector('main');
let h1 = document.querySelector('main h1');

ul.addEventListener('click', (event) => {
  event.stopPropagation();
  removeHighlight();
  let url = event.target.href;
  let id = url.match(/#[a-z]+-[0-9]/);
  let article = document.querySelector(`${id}`)
  article.classList.add('highlight');
});

[...main.children].forEach(element => {
  if (element.tagName === 'ARTICLE') {
    element.addEventListener('click', (event) => {
      event.stopPropagation();
      removeHighlight();
      event.currentTarget.classList.add('highlight');
    });
  }
});

h1.addEventListener('click', (event) => {
  event.stopPropagation();
  removeHighlight();
  main.classList.add('highlight');
});

document.body.addEventListener('click', (event) => {
  removeHighlight();
  main.classList.add('highlight');
});


function removeHighlight() {
  let highlighted;
  
  if (highlighted = document.querySelector('.highlight')) {
    highlighted.classList.remove('highlight');
  }
}