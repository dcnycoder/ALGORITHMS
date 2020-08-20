// p.109 problem 4.2 Minimal Tree: given a sorted(increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height

// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// * function TreeNode(val, left, right) {
//   *     this.val = (val===undefined ? 0 : val)
//   *     this.left = (left===undefined ? null : left)
//   *     this.right = (right===undefined ? null : right)
//   * }

class BST { // separate class for BST WAS NOT USED
  constructor(node) {
    this.root = new Node(node)
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
      } // end of if new node value < less node value clause
      else return this
    }
  } // end of addNode
} // end of class BST

function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}

function sortedArrayToBST(array) {
  //if (end<begin) return null
  if (!array.length) return null
  else {
    const middle = Math.floor(array.length/2)
    const leftPart = array.slice(0, middle)
    const rightPart = array.slice(middle+1, array.length)
    let node = new TreeNode(array[middle])
    node.left = sortedArrayToBST(leftPart)
    node.right = sortedArrayToBST(rightPart)
    return node
  }
} // end of sortedArrayToBST

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

console.log(sortedArrayToBST(array))
