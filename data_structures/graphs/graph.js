

// Instantiate a new graph
var Graph = function(value) {
  this.value = value
  this.nodes = []
  this.vertices = []
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node)
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var found = false
  var i = 0
  while(!found && i < this.nodes.length) {
    if(this.nodes[i] === node) found = true
    i++
  }
  return found
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // Remove node from nodes
  for(var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      this.nodes.splice(i, 1)
    }
  }

  // Remove node from vertices
  for(var i = 0; i < this.vertices.length; i++) {
    var vertex = this.vertices[i]
    if (vertex[0] === node || vertex[1] === node) {
      this.vertices.splice(i, 1)
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var found = false
  var i = 0

  while (!found && i < this.vertices.length) {
    var vertex = this.vertices[i]
    if ((vertex[0] === fromNode && vertex[1] === toNode) || (vertex[0] === toNode && vertex[1] === fromNode)) {
      found = true
    }
    i++
  }

  return found
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.vertices.push([fromNode, toNode])
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(var i = 0; i < this.vertices.length; i++) {
    var vertex = this.vertices[i]
    if ((vertex[0] === fromNode && vertex[1] === toNode) || (vertex[0] === toNode && vertex[1] === fromNode)) {
      this.vertices.splice(i, 1)
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i])
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
