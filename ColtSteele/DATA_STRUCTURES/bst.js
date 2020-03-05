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
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

let bst = new BST();
console.log(bst.add(5).add(15).add(2));

