describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should contain all functions needed to perform operations on DLL', function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
    expect(doublyLinkedList.prepend).to.be.a('function')
    expect(doublyLinkedList.append).to.be.a('function')
    expect(doublyLinkedList.removeAtIndex).to.be.a('function')
  });

  it('should be able to return the size after adding a node', function () {
    doublyLinkedList.addToHead(4)
    expect(doublyLinkedList.size).to.equal(1)
  })

  it('should be able to return the updated size after removing a node', function () {
    doublyLinkedList.addToHead(4)
    doublyLinkedList.removeHead()
    expect(doublyLinkedList.size).to.equal(0)
  })

  it('should be able to add a node to the head', function() {
    doublyLinkedList.addToHead(4)
    doublyLinkedList.addToHead(5)
    doublyLinkedList.addToHead(6)
    expect(doublyLinkedList.head.value).to.equal(6)
    expect(doublyLinkedList.head.next.value).to.equal(5)
    expect(doublyLinkedList.head.next.next.value).to.equal(4)
  })

  it('should be able to traverse from head to tail', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    expect(doublyLinkedList.head.value).to.equal(4)
    expect(doublyLinkedList.head.next.value).to.equal(5)
    expect(doublyLinkedList.head.next.next.value).to.equal(6)
  })

  it('should be able to traverse from tail to head', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    expect(doublyLinkedList.tail.value).to.equal(6)
    expect(doublyLinkedList.tail.previous.value).to.equal(5)
    expect(doublyLinkedList.tail.previous.previous.value).to.equal(4)
  })

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(4);
  })

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should be able to find node given the value', function () {
    doublyLinkedList.addToTail(4)
    doublyLinkedList.addToTail(5)
    doublyLinkedList.addToTail(6)
    var nodeExpect = doublyLinkedList.findNode(6)
    expect(doublyLinkedList.findNode(6)).to.equal(nodeExpect)
  })

  it('should be able to find node given an index', function () {
    doublyLinkedList.addToTail(4)
    doublyLinkedList.addToTail(5)
    doublyLinkedList.addToTail(6)
    var nodeExpect = doublyLinkedList.findAtIndex(1)
    expect(doublyLinkedList.findAtIndex(1)).to.equal(nodeExpect)
  })

  it('should return undefined for a non-existent node', function () {
    doublyLinkedList.addToTail(4)
    doublyLinkedList.addToTail(5)
    expect(doublyLinkedList.findNode(6)).to.be.undefined
  })

  it('should throw an error when trying to add a node with an out-of-bounds index', function () {
    doublyLinkedList.addToTail(4)
    expect(doublyLinkedList.append.bind(doublyLinkedList, 5, 2)).to.throw(Error)
    expect(doublyLinkedList.append.bind(doublyLinkedList, 5, -1)).to.throw(Error)
  })

  it('should be able to add a node after a given index', function () {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.append(5, 0)
    expect(doublyLinkedList.head.value).to.equal(4)
    expect(doublyLinkedList.head.next.value).to.equal(5)
    expect(doublyLinkedList.head.next.next.value).to.equal(6)
    expect(doublyLinkedList.head.next.previous.value).to.equal(4)
    expect(doublyLinkedList.tail.previous.value).to.equal(5)
  })

  it('should be able to add a node before a given index', function () {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.prepend(5, 1)
    expect(doublyLinkedList.head.value).to.equal(4)
    expect(doublyLinkedList.head.next.value).to.equal(5)
    expect(doublyLinkedList.head.next.next.value).to.equal(6)
    expect(doublyLinkedList.head.next.previous.value).to.equal(4)
    expect(doublyLinkedList.tail.previous.value).to.equal(5)
  })

  it('should be able to remove a node at given index', function () {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(6);
    doublyLinkedList.removeAtIndex(1)
    expect(doublyLinkedList.head.next.value).to.equal(6)
    expect(doublyLinkedList.tail.previous.value).to.equal(4)
  })
});
