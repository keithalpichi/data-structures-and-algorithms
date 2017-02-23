// Using a Binary Tree and DFS
// Return true if there is any path starting from the root and ending in a leaf,
// such that the sum of the values along the path equals the given sum.
const hasPathToSum = function(root, targetSum) {
  let found = false
  const search = (node, sum) => {
    // Base case: sum === targetSum && !node.left && !node.right
    let currentSum = sum + node.value
    if (currentSum === targetSum && !node.left && !node.right) {
      found = true
      return
    }
    if (node.left) search(node.left, currentSum)
    if (node.right) search(node.right, currentSum)
  }
  search(root, 0)
  return found
};

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

console.log(hasPathToSum(node, 17) === true)
