/*
input: generation number

rules:
  - body is gen 0
  - each nested element is next gen
  - input is non negitive integer
  - all elements of input gen get generation-color class added as an attribute

algorithm:
  - get elements of gen
    - parents is array containing document body
    - while geneartion is less than input generation
      - increment generation by 1
      - get all children of parents
        - we have array of parent elements
          - tranform parents into array of their children
            - children need to be converted into array
          - combine arrays of children (reduce or use flatmap?)
      - set parents to array of chilren

  - now we have array of elements of input gen
    - iterate over elements, adding generation-color class to them

*/

function colorGeneration(generation) {
  if (generation === 0) {
    return undefined;
  }
  
  let elements = getGenerationElements(generation);
  colorElements(elements);
}

function getGenerationElements(generation) {
  let parents = [document.body];
  let count = 0;

  while (count < generation) {
    count += 1;
    parents = getAllChildren(parents); 
  }

  return parents;
}

function getAllChildren(parents) {
  return parents.flatMap(parent => [...parent.children]);
}

function colorElements(elements) {
  elements.forEach(element => element.classList.add('generation-color'));
}