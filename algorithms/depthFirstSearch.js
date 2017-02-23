const depthFirstSearch = (root, num) => {
  let found = false
  const search = (node) => {
    // Base case: If no children break or node.value === num return true
    if (node.value === num) {
      found = true
      return
    }
    if (!node.right && !node.left) return
    // if left node, call search on it
    if (node.left) search(node.left)
    // if right node, call search on it
    if (node.right) search(node.right)
  }
  search(root)
  return found
}

const Node = (value) => {
  let node = {}
  node.value = value
  node.left = null
  node.right = null
  return node
}

const node = Node(3)
node.left = Node(2)
node.right = Node(8)
node.left.left = Node(1)
node.right.left = Node(6)
node.right.right = Node(10)

console.log(depthFirstSearch(node, 6) === true)
console.log(depthFirstSearch(node, 11) === false)
