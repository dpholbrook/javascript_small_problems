/*
create a nodes array that has body and an array of its children
format children so that each child node is in a sub array
set children to currentParent nodes
while currentParent nodes have children
set current parent nodes to get next gen children
  - get children of parent and make second element of array
  - format parent to its name
  - [HEADER [child1, childnode2, etc]]
  - push the children to the result which is newParentNodes array
  - return the new parent nodes array which is now the current parent nodes

run get next gen one time after the loop to format the final parent nodes that did not have children
return the result
*/

function nodesToArray() {
  let dom = [document.body, children(document.body)]
  let currentParentNodes = dom[1];
  
  while (haveChildren(currentParentNodes)) {
    currentParentNodes = getNextGeneration(currentParentNodes);
  }
  
  getNextGeneration(currentParentNodes)

  return dom;
}

function children(node) {
  return [...node.children].map(child => [child]);
}

function haveChildren(currentParentNodes) {
  for (let i = 0; i < currentParentNodes.length; i += 1) {
    if (children(currentParentNodes[i][0]).length > 0) {
      return true;
    }
  }

  return false;
}

function getNextGeneration(currentParentNodes) {
  let newParentNodes = [];

  currentParentNodes.forEach((parent) => {
    parent[1] = children(parent[0]);
    parent[0] = parent[0].tagName;
    parent[1].forEach(child => newParentNodes.push(child));
  });

  return newParentNodes;
}

function nodesToArray(node = document.body) {
  return [node.tagName, [...node.children].map(child => nodesToArray(child))];
}