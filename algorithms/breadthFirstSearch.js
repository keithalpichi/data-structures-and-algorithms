const breadthFirstSearch = (root, num) => {
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    let node = queue.shift()
    if (node.value === num) return true
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return false
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

console.log(breadthFirstSearch(node, 6) === true)
console.log(breadthFirstSearch(node, 11) === false)
