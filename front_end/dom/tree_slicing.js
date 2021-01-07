/*
Tree Slicing
Implement a function, sliceTree, that is "similar" to the Array.prototype.slice method, but this time for a DOM tree. The sliceTree function takes two arguments: the start index which is the parent node's id attribute and, the end index which is the innermost child node's id attribute. The function returns an array of tagNames. Take note of the following when implementing the sliceTree function:

It's similar to slice but different in the sense that slice isn't inclusive on the right hand side.
The end index doesn't have to be the id of the "innermost" child node as some of the examples suggest.
Only consider element nodes.
Only elements that have body as an ancestor (parent, grandparent, etc.) are sliceable.
If the id attribute of the start or end index is not in the DOM, return undefined.
If the slice is not feasible — there's no path connecting the element at the starting index to the ending index — return undefined.


input: id1, id2
otuput: array of node names or undefined

rules:
  - id1 must be ancestor of id2 (id2 must be inside id1)
  - inclusive slice
  - return undefined if:
    - input elements are not in DOM
    - id2 is not inside id1
    - element is not in body

algorithm:
  - check to see if elements are in body
    - walk from body and see if node exists
    - if it does, return true
    - else false

  - if elements are not in body 
  - or if id2 isn't inside id1
    - return undefined

  get parent of id2 until parent is id1, shifting parent name to front of result array


Go from start node to end node.
Start has to be ancestor of end. 
*/

function sliceTree(id1, id2) {
  let slice = [];

  if (!validNodes(id1, id2)) {
    return undefined;
  }

  while (id2 >= id1) {
    let node = document.getElementById(id2);
    let nodeName = node.nodeName;
    slice.unshift(nodeName);
    id2 = node.parentNode.id;
  }

  return slice;
}

function validNodes(id1, id2) {
  return inBody(id1) 
  && inBody(id2) 
  && validInnerChild(id1, id2);
}

function inBody(id) {
  let result = false;
  walk(document.body, (node) => {
    if (node.id === String(id)) {
      result = true;
    }
  })
  
  return result;
}

function validInnerChild(id1, id2) {
  let result = false;
  let node = document.getElementById(`${id1}`);
  walk(node, (node) => {
    if (node.id === String(id2)) {
      result = true;
    }
  })
  
  return result;
}

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

