var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v]
  // Get index bucket
  var bucket = this._storage.get(index)
  // if undefined, create nested array and set it at index
  if (bucket === undefined) {
    this._storage.set(index, [tuple])
  } else {
    var keyExists = false
    var i = 0
    // iterate over pairs
    while (!keyExists && i < bucket.length) {
      // if key === k, replace value with v and make keyExists to true
      if (bucket[i][0] === k) {
        keyExists = true
        bucket[i][1] = v
      }
      i++
    }

    if (!keyExists) {
      bucket.push(tuple)
      this._storage.set(index, bucket)
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)
  var found = undefined
  var i = 0
  while (bucket && !found && i < bucket.length) {
    //debugger
    if (bucket[i][0] === k) {
      found = bucket[i][1]
    }
    i++
  }
  return found
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)
  var removed = false
  var i = 0
  while(!removed && i < bucket.length) {
    if (bucket[i][0] === k) {
      removed = true
      bucket.splice(i, 1)
      if (!!bucket) {
        this._storage.set(index, undefined)
      } else {
        this._storage.set(index, bucket)
      }
    }
    i++
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
