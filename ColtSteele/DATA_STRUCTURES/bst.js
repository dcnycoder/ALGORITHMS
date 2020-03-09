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

  breadthFirstSearch() {
    if (!this.root) return []
    else {
      function bfs(current) {
        let result = []
        result.push(current.value)
        if (current.left) result = result.concat(bfs(current.left))
        if (current.right) result = result.concat(bfs(current.right))
        return result
      }

    return bfs(this.root);
    }
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
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

let bst = new BST();
console.log(bst.add(5).add(15).add(2).add(100).add(-1));
//console.log("BST.find: ", bst.find(2));
console.log("BFS: ", bst.bfsIterative())

