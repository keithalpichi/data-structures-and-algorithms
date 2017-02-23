var verifyIndex = function(index) {
  if (index > this.size - 1 || index < 0) {
    throw new Error('Index out of range')
  }
}

var DLLMethods = {
  findNode: function(value) {
    // keep a reference to the indexCount after going to next node
    var indexCount = 0
    // set starting node to the head
    var currentNode = this.head
    // keep iterating nodes until either node is found or the end is reached
    while (indexCount < this.size - 1) {
      if (currentNode.value === value) return currentNode
      currentNode = currentNode.next
      indexCount++
    }
    return undefined
  },
  findAtIndex: function(atIndex) {
    verifyIndex.call(this, atIndex)
    var indexCount = 0
    var currentNode = this.head
    while (indexCount < atIndex) {
      currentNode = currentNode.next
      indexCount++
    }
    return currentNode
  },
  prepend: function (value, atIndex) {
    verifyIndex.call(this, atIndex)
    var indexCount = 0
    var currentNode = this.findAtIndex(atIndex)
    var newNode = Node(value)
    newNode.next = currentNode
    newNode.previous = currentNode.previous
    currentNode.previous.next = newNode
    currentNode.previous = newNode
    this.size++
  },
  append: function (value, atIndex) {
    // Throw error if atIndex is out-of-bounds
    verifyIndex.call(this, atIndex)
    var currentNode = this.findAtIndex(atIndex)
    var newNode = Node(value)
    // set new node's next to the current node's next node
    newNode.next = currentNode.next
    // set new node's previous to the current node
    newNode.previous = currentNode
    // set the current node's next previous value to the new node
    currentNode.next.previous = newNode
    // set the current node's next to the new node
    currentNode.next = newNode
    this.size++
  },
  removeAtIndex: function (atIndex) {
    verifyIndex.call(this, atIndex)
    var currentNode = this.findAtIndex(atIndex)
    currentNode.previous.next = currentNode.next
    currentNode.next.previous = currentNode.previous
    this.size--
  },
  addToHead: function(value) {
    var node = Node(value)
    if(!this.head) {
      this.tail = node
    } else {
      this.head.previous = node
      node.next = this.head
    }
    this.head = node
    this.size++
  },
  addToTail: function(value) {
    var node = Node(value)
    if(!this.tail) {
      this.head = node
    } else {
      node.previous = this.tail
      this.tail.next = node
    }
    this.tail = node
    this.size++
  },
  removeHead: function() {
    if (!this.head) return undefined
    var node = this.head
    this.head = this.head.next
    this.size--
    return node.value
  },
  removeTail: function() {
    if (!this.tail) return undefined
    this.tail = this.tail.previous
    this.size--
  },
  contains: function(target, node = this.head) {
    if (node.value === target) return true
    if (!node.next) return false
    return this.contains(target, node.next)
  }
}

var DoublyLinkedList = function() {
  var list = {};
  list.size = 0;
  list.head = null;
  list.tail = null;

  for (var key in DLLMethods) {
    list[key] = DLLMethods[key]
  }

  return list
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
