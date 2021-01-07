let selectClass = document.querySelector('#animal-classifications');
let classes = [...selectClass.children].slice(1);
let selectAnimal = document.querySelector('#animals');
let animals = [...selectAnimal.children].slice(1);
let classification;
let clear = document.querySelector('#clear');


const animalClasses = {
  vertebrate: ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  warmblooded: ['Bear', 'Whale', 'Ostrich'],
  coldblooded: ['Salmon', 'Turtle'],
  mammal: ['Bear', 'Whale'],
  bird: ['Ostrich'],
};


selectClass.addEventListener('change', event => {
  classification = [...event.currentTarget.children].filter(option => option.selected)[0].value;
  disableAnimals(classification)
});

selectAnimal.addEventListener('change', event => {
  animal = [...event.currentTarget.children].filter(option => option.selected)[0].value;
  disableClasses(animal)
});

clear.addEventListener('click', resetFields);

function resetFields() {
  enableElements(animals);
  enableElements(classes);
}

function getAnimals(classification) {
  classification = formatClass(classification);
  return animalClasses[classification];
}

function formatClass(classification) {
    return classification.toLowerCase().replace(/\W/g, '');
}

function getClasses(animal) {
  let classes = Object.keys(animalClasses);
  let result = classes.filter(classer => animalClasses[classer].includes(animal));
                      // .map(classer => classer[0].toUpperCase() + classer.slice(1));
  return result;
}

function disableAnimals(classification) {
  let visibleAnimals = getAnimals(classification);
  
  enableElements(animals);
  
  if (classification === 'Classifications') {
    return;
  } 
  
  animals.forEach(animal => {
    if (!visibleAnimals.includes(animal.value)) {
      animal.classList.add('hidden');
    }
  });
}

function disableClasses(animal) {
  let visibleClasses = getClasses(animal); 
  
  enableElements(classes);
  
  if (animal === 'Animals') {
    return;
  } 
  
  classes.forEach(classer => { 
    className = formatClass(classer.value);
    if (!visibleClasses.includes(className)) {
      classer.classList.add('hidden');
    }
  });
}

function enableElements(elements) {
  elements.forEach(element => {
    element.classList.remove('hidden');
  });
}

// CSS
// .hidden {
//   display: none;
// }