// p.109 problem 4.2 Minimal Tree: given a sorted(increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(node) {
    if (!node) {
      this.root = null
    }
    else this.root = node
  }
  addNode(value) {
    let node = new Node(value)
    function insertNode(node, newNode) {
      if (newNode.value<node.value) {
        if (!node.left) {
          node.left = newNode
          return this
        }
        else insertNode(node.left, node)
      }
      else if (newNode.value>node.value) {
        if (!node.right) {
          node.right = newNode
          return this
        }
      }
      else return this
    }
    if (!this.root) this.root = node
    else insertNode(root, node)
  } // end of addNode
} // end of class BST


