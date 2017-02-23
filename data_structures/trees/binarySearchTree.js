var BinarySearchTree = function(value) {
  var tree = {}
  tree.left = null
  tree.right = null
  tree.value = value

  for(var key in BSTmethods) {
    tree[key] = BSTmethods[key]
  }

  return tree
};

var BSTmethods = {}

BSTmethods.insert = function (value, node = this) {
  if (value > node.value) {
    if (node.right) return this.insert(value, node.right)
    else node.right = BinarySearchTree(value)
  } else {
    if (node.left) return this.insert(value, node.left)
    else node.left = BinarySearchTree(value)
  }
};

BSTmethods.contains = function (value, node = this) {
  if (value > node.value) {
    if (node.right) return this.contains(value, node.right)
    else return false
  } else if (value < node.value) {
    if (node.left) return this.contains(value, node.left)
    else return false
  } else {
    return true
  }
};

BSTmethods.depthFirstLog = function (cb, node = this) {
  cb(node.value)
  if (node.right) this.depthFirstLog(cb, node.right)
  if (node.left) this.depthFirstLog(cb, node.left)
};
/*
/*
 * Complexity: What is the time complexity of the above functions?
 */
