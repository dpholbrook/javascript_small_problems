const cars = [
  { make: 'Honda', image: 'https://placehold.co/200x100/000000/FFFFFF/png', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'https://placehold.co/200x100/000000/111111/png', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'https://placehold.co/200x100/000000/F1F4F4/png', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'https://placehold.co/200x100/000000/AAAAAA/png', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'https://placehold.co/200x100/000000/F6F6F6/png', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'https://placehold.co/200x100/000000/999999/png', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'https://placehold.co/200x100/000000/CCCCCC/png', model: 'A4', year: 2013, price: 26000 },
];

let makes = uniques(cars.map(car => car.make));
let models = uniques(cars.map(car => car.model));
let years = uniques(cars.map(car => car.year));
let prices = uniques(cars.map(car => car.price));

document.addEventListener('DOMContentLoaded', () => {

  


  function uniques(arr) {
    let uniques = [];

    arr.forEach(item => {
      if (!uniques.includes(item)) {
        uniques.push(item);
      }
    });

    return uniques;
  }


  const carsTemplate = Handlebars.compile(document.querySelector('#carsTemplate').innerHTML);
  // const filterTemplate = Handlebars.compile(document.querySelector('#filter-template').innerHTML);
  const makeTemplate = Handlebars.compile(document.querySelector('#make-template').innerHTML);
  const modelTemplate = Handlebars.compile(document.querySelector('#model-template').innerHTML);
  const priceTemplate = Handlebars.compile(document.querySelector('#price-template').innerHTML);
  const yearTemplate = Handlebars.compile(document.querySelector('#year-template').innerHTML);


  let filters = [makeTemplate, modelTemplate, priceTemplate, yearTemplate];

  // Handlebars.registerPartial('make-template', document.querySelector('#make-template').innerHTML);
  // Handlebars.registerPartial('model-template', document.querySelector('#model-template').innerHTML);
  // Handlebars.registerPartial('price-template', document.querySelector('#price-template').innerHTML);
  // Handlebars.registerPartial('year-template', document.querySelector('#year-template').innerHTML);
  let makeFilter = document.querySelector('#make_filter');
  makeFilter.innerHTML = makeTemplate({makes});

  let modelFilter = document.querySelector('#model_filter');
  modelFilter.innerHTML = modelTemplate({models});

  let priceFilter = document.querySelector('#price_filter');
  priceFilter.innerHTML = priceTemplate({prices});

  let yearFilter = document.querySelector('#year_filter');
  yearFilter.innerHTML = yearTemplate({years});

  document.querySelector('main').innerHTML = (carsTemplate({ cars }));
  // let filterContainer = document.querySelector('.filters').innerHTML = (filterTemplate({ cars }));



  let selectMake = document.querySelector('#make');
  let selectModel = document.querySelector('#model');
  let selectPrice = document.querySelector('#price');
  let selectYear = document.querySelector('#year');
  let selections = [selectMake, selectModel, selectPrice, selectYear]
  let filter = document.querySelector('#filter');






  // console.log(selectMake.value);
  function getSelection(selectElement) {
    let selection = selectElement.selectedOptions[0].innerText
    if (selection === 'All') return true;
    return selection;
  }

  filter.addEventListener('click', event => {
    event.preventDefault();
    let allSelections = selections.map(getSelection)
    let keys = ['make', 'model', 'price', 'year']
    let remaining = cars.filter(car => {
      let valid = true;

      for (let index = 0; index < keys.length; index++) {
          if (car[keys[index]] === allSelections[index] 
          || allSelections[index] === true 
          || car[keys[index]] === Number(allSelections[index])) {
          } else {
            valid = false;
          }
      }
      return valid;
    });
    document.querySelector('main').innerHTML = carsTemplate({ cars: remaining });
  });

  function returnModels(make) {
    let uniqueModels = [];
    let filteredCars = cars.filter(car => make === car.make);
    filteredCars.forEach(car => {
      if (!uniqueModels.includes(car.model)) {
        uniqueModels.push(car.model);
      }
    });

    return uniqueModels;
  }

  function renderModels(models) {
    [...selectModel.children].forEach(model => model.remove());
    let all = document.createElement('option');
    all.value = "";
    all.textContent = "All";
    selectModel.appendChild(all);
    models.forEach(model => {
      let option = document.createElement('option');
      option.value = model;
      option.textContent = model;
      selectModel.appendChild(option);
    });
  }

  selectMake.addEventListener('change', event => {
    let make = selectMake.selectedOptions[0].value;
    let models = returnModels(make);
    renderModels(models);
  });
})
/*
 when a make is selected, the models should be filtered and repopulated

 add event listener to select #make
 if the value selected is not 'All'
  - get the value
  - filter cars for that make
  - remove all options
  - add filtered options
*/