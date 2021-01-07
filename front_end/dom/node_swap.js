/*
swap nodes
if a node does not exist, return undefined
if a node is child of the other, return undefined

algorithm
if node1 or node2 is null, return undefined
if node1 is child of node2, return undefined
if node2 is child of node1, return undefined

if nodes are valid
  - create temp node and put before node1
  - move node1 before node2
  - move node2 bfore temp
  - remove temp

*/

function nodeSwap(id1, id2) {
  let node1 = document.getElementById(id1);
  let node2 = document.getElementById(id2);

  if (validNodes(node1, node2)) {
    let temp = document.createElement('div');
    node1.insertAdjacentElement('beforebegin', temp);
    node2.insertAdjacentElement('beforebegin', node1);
    temp.insertAdjacentElement('beforebegin', node2);
    temp.remove();
    return true;
  } else {
    return undefined
  }
}

function validNodes(node1, node2) {
  if (!node1 
    || !node2
    || node1.contains(node2)
    || node2.contains(node1)
  ) {
    return false;
  } else {
    return true;
  }
}