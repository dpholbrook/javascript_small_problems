/*
Tracing the DOM Tree
Write a JavaScript function that takes an element's id and returns the DOM tree of the element in a two-dimensional array. The first subarray contains the element and its siblings, the second contains the parent of the element and its siblings, so on and so forth, all the way up to the "grandest" parent. Assume that the grandest parent is the element with an id of "1". Use the following HTML and test cases to test your code:

input: id
output: array of sub arrays containing element name
  - siblings
  - parent and its siblings
  - grandparent and siblings
  - etc
  - grandest parent (id is 1)

rules:
  - element name is?

algorithm:
  - get names with nodeName
  - while node id does not equal one
    - generate siblings and push to result
    - generate siblings of parent and push to result

  - result array
  - put input element into sibligs array
  - get siblings of current element and put names in siblings array
  - push siblings array to result
  - get parent and put into array
  - get siblings of parent and add to parent siblings array
  - push to result

  - do this until current element or parent is id of 1

*/

function domTreeTracer(id) {
  let node = document.getElementById(`${id}`);
  let result = [];

  function generateSiblings(node) {
    let siblings = [...node.parentNode.children]
    return siblings.map(sibling => {
      return sibling.nodeName;
    });
  };

  while (node.id !== '1') {
    result.push(generateSiblings(node));
    node = node.parentNode;
  }

  result.push([node.nodeName]);

  return result;
}

