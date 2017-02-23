var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild
  newTree.contains = treeMethods.contains

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value)
  this.children.push(node)
};

treeMethods.contains = function(target) {
  var found = false

  function searchChildren(node) {
    if (node.value === target) found = true
    if (node.children) {
      node.children.forEach(function(child) {
        searchChildren(child)
      })
    }
  }

  searchChildren(this)

  return found
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
