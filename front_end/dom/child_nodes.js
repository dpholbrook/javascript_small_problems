// FEX
function childNodes(id) {
  let node = document.getElementById(`${id}`);
  let children = node.childNodes;
  let allChildren = 0;
  let indirectChildren;
  
  function walk(node, callback) {
    callback(node);
  
    for (let index = 0; index < node.childNodes.length; index += 1) {
      walk(node.childNodes[index], callback);
    }
  }

  walk(node, () => {
    allChildren += 1;
  });

  indirectChildren = allChildren - children.length - 1;

  return [children.length, indirectChildren];
}

// for each child, we iterate through its children, incrementing count


