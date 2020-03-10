class BST {
  constructor() {
    this.root = null
  }
  add(value) {
    const newNode = new Node(value)
    if (!this.root) this.root = newNode
    else {
      let currentNode = this.root
      //While loop(infinite) which breaks only when we insert the element
      while(true) {
        // If the newNode.value is smaller
        if (value<currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          }
          else {
            currentNode = currentNode.left;
          }
        }
        else if (value>currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          else {
            currentNode = currentNode.right;
          }
        }
        else break;
      }
    }
      return this;
  }
  find(value) {
    if (!this.root) return false
    else {
      let current = this.root;
      while (true) {
        if (value<current.value) {
          if (!current.left) break
          else current = current.left
        }
        else if (value>current.value) {
          if (!current.right) break
          else current = current.right
        }
        else return true;
      }
      return false;
    }
  }

  breadthFirstSearch(queue = undefined) {
    let result = []
    if (queue === undefined && this.root) {
      let queue = [this.root]
      return this.breadthFirstSearch(queue)
    }
    else if (queue && queue.length>0) {
      const current = queue.shift()
      result.push(current.value)
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right)
      }
      return result = result.concat(this.breadthFirstSearch(queue))
    }
    else return result //the queue length is 0
  } // end of breadthFirstSearch

  bfsIterative() {
    let result = []
    let current
    if (this.root) {
      let queue = [this.root]
      while(queue.length>0) {
        current = queue.pop()
        result.push(current.value)
        if (current.left) queue.unshift(current.left)
        if (current.right) queue.unshift(current.right)
    }
    return result
  }
  } //end of bfsIterative

  dfs(current) {
    let result = []
    if (current === undefined && this.root) {
      current = this.root
      result = result.concat(this.dfs(current))
    }
    else if (current) {// the node is given
      result.push(current.value)
      if (current.left) result = result.concat(this.dfs(current.left))
      if (current.right) result = result.concat(this.dfs(current.right))
    }
    //else return result //no node provided and no this.root, then return empty array

    return result
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

let bst = new BST();
console.log(bst.add(50).add(30).add(100).add(15).add(35).add(105));
//console.log("BST.find: ", bst.find(2));
console.log("BFS: ", bst.breadthFirstSearch())

