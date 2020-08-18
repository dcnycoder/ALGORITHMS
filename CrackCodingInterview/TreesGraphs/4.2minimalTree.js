// p.109 problem 4.2 Minimal Tree: given a sorted(increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height

// * function TreeNode(val, left, right) {
//   *     this.val = (val===undefined ? 0 : val)
//   *     this.left = (left===undefined ? null : left)
//   *     this.right = (right===undefined ? null : right)
//   * }


class Node { // class-based
  constructor(value, left, right) {
    this.value = (value? value : 0)
    this.left = (left? left : null)
    this.right = (right? right : null)
  }
}

class BST { // separate class for BST
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
        //return insertNode(node.right, node)
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

var minHeightBST = function(array) { // without separate BST class
  function addNode(root, newNode) {
    node = root
    newNode = new TreeNode(newNode)
    while (true) {
      if (newNode.val<node.val) {
        if (!node.left) {
          node.left = newNode
          return root
        }
        else {
          node = node.left
        }
      } // end of if new node value < less node value clause
      else if (newNode.val>node.val) {
        if (!node.right) {
          node.right = newNode
          return root
        }
        else {
          node = node.right
        }
        //return insertNode(node.right, node)
      } // end of if new node value < less node value clause
      else return root
    }
  }
  const middle = Math.min(array.length/2)
  let bst = new TreeNode(array[middle])

  array.splice(middle, 1)
  array.forEach(elem => {
    addNode(bst, elem)
  })
  return bst
} //end of minHeightBST

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

console.log(minHeightBST(array))


// let bst = new BST
// console.log("BST after addNodes: ", bst
//   .addNode(50)
//   .addNode(100)
//   .addNode(25)
//   .addNode(75)
// )
