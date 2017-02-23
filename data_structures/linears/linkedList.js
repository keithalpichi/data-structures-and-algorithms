var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value)
    if (!list.head && !list.tail) {
      list.head = node
    } else {
      list.tail.next = node
    }
    list.tail = node
  };

  list.removeHead = function() {
    var node = list.head
    if (node.next) {
      list.head = node.next
    }
    return node.value
  };

  list.contains = function(target) {
    var found = false;

    function findTarget(node) {
      if (node.value === target) found = true
      if (node.next) findTarget(node.next)
    }

    findTarget(list.head)

    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
