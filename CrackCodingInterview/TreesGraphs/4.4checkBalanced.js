//https://leetcode.com/problems/balanced-binary-tree/

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.

//Definition for a binary tree node.
 function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function BTBuilder(array) {
  let root = new Node(array[0])
  let queue = [root]
  for (let i=1; i<array.length; i++) {
    let currentNode = queue.pop()
    if (array[i+1] != null) {
      currentNode.right = new Node(array[i+1])
      queue.push(currentNode.right)
    }
    else currentNode.right = null

    if (array[i] != null) {
      currentNode.left = new Node(array[i])
      queue.push(currentNode.left)
    }
    else currentNode.left = null
    i+=1
  }
  return root
}

//measure lengths of left and right branches and compare.
//run BST on every tree and record levels. Essentially run a BST function with level counter, where the root of the func is a left and right node correspondingly
var isBalanced = function(root) {
  //for every node: measure the left and right branch height
  //if the node is not an end node, branchHeight gets called recursively
  //compare branch heights and return true or false


  function heightDifference(node) {
    const leftBranch = node.left
    const rightBranch = node.right
    let leftHeight
    let rightHeight

    if (leftBranch === null) leftHeight = 0
    else leftHeight = 1 + maxHeight(leftBranch)
    if (rightBranch === null) rightHeight = 0
    else rightHeight = 1 + maxHeight(rightBranch)
    console.log('difference: ', Math.abs(rightHeight - leftHeight))
    return Math.abs(rightHeight - leftHeight)
    //return Math.abs(heightDifference(leftBranch) - heightDifference(rightBranch))
  }

  function maxHeight(node) { //maximum height of binary tree
    let counter = 0
    if (!root) return counter
    else { //run a bst with a level counter
      counter = 1


      // let queue = [root]
      // while (queue.length) {
      //   counter +=1
      //   let queueLength = queue.length
      //   for (let i=0; i<queueLength; i++) {
      //     const node = queue.pop()
      //     if (node.left) queue.unshift(node.left)
      //     if (node.right) queue.unshift(node.right)
      //   }

      // }
    }
    return counter
  } //end of branchHeight

  if (!root) return false
  else {
    return heightDifference(root)
    // console.log(branchHeight(root.left))
    // console.log(branchHeight(root.right))
    // let balanced = ((Math.abs(branchHeight(root.left)-branchHeight(root.right)) <= 1)? true : false)
    // return balanced
  }
};

//console.log("Tree: ", BTBuilder([1,2,2,3,3,null,null,4,4]))
//const bt = BTBuilder([1,2,2,3,3,null,null,4,4])
const bt = BTBuilder([3,9,20,null,null,15,7])
console.log('bt: ', bt)
console.log(isBalanced(bt))

