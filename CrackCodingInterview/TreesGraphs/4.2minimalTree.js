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
      this.root = new Node(null)
    }
    else this.root = node
  }
  addNode(value) {
    let node
    let newNode = new Node(value)
    if (!this.root.value) {
      this.root = newNode
      return this
    }
    else node = this.root
    while (true) {
      if (newNode.value<node.value) {
        if (!node.left) {
          node.left = newNode
          return this
        }
        else {
          node = node.left
        }
      } // end of if new node value < less node value clause
      else if (newNode.value>node.value) {
        if (!node.right) {
          node.right = newNode
          return this
        }
        else {
          node = node.right
        }
        //return insertNode(node.right, node)
      } // end of if new node value < less node value clause
      else return this
    }

    // function insertNode(node, newNode) {

    // } //end of insertNode

    // else return insertNode(this.root, node)
  } // end of addNode
} // end of class BST

let bst = new BST
console.log("BST after addNodes: ", bst
  .addNode(50)
  .addNode(100)
  .addNode(25)
  .addNode(75)
)
