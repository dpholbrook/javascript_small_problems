let sectionElement = document.querySelector('section');

function makeBold(element) {
  element.style.fontWeight = 'bold';

  let event = new CustomEvent('bolded');
  element.dispatchEvent(event);

  if (typeof callback === 'function') {
    callback(element);
  }
}

sectionElement.addEventListener('bolded', function(event) {
  this.classList.add('highlight');
});

makeBold(sectionElement);

sectionElement.classList.contains('highlight');
// true
sectionElement.style.fontWeight;
// "bold"





// make an event called bolded that when fired, does something else to the element that has been bolded
