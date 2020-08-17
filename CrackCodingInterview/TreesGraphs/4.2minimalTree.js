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

}


