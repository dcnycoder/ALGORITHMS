class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  addRecursive(value, currentNode) {
    let newNode = new Node(value)
    if (!this.root) {
      this.root = newNode;
    }
    else if (currentNode === undefined) {
      currentNode = this.root;
        this.addRecursive(value, currentNode)
    }
    else if (currentNode === null) {
      currentNode = newNode;
    }
    else {
      if (value<currentNode.value) {
        if (!currentNode.left) currentNode.left = newNode
        else this.addRecursive(value, currentNode.left)

      }
      else if (value>currentNode.value) {
        if (!currentNode.right) currentNode.right = newNode
        else this.addRecursive(value, currentNode.right)
      }

    }
    return this
  } //end of addRecursive
}

let bst = new BST()
console.log(bst.addRecursive(10).addRecursive(5).addRecursive(2).addRecursive(20).addRecursive(1));
console.log(bst.root.left.left.left);
