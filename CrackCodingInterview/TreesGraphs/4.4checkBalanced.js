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

 //[5,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5]
function BTBuilder(array) {
  //let root = new Node(array[0])
  array[0] = new Node(array[0])
  //let queue = [root]
  for (let i=0; i<array.length; i++) {
    if (array[i]!=null) {
      let currentNode = array[i]
      if (array[2*i+1] && array[2*i+1] != null) {
        array[2*i+1] = new Node(array[2*i+1])
        currentNode.left = array[2*i+1]
        //queue.push(currentNode.left)
      }
      else currentNode.left = null

      //was: if (array[i] != null) {
      if (array[2*i+2] && array[2*i+2] != null) {
        array[2*i+2] = new Node(array[2*i+2])
        currentNode.right = array[2*i+2]
        //queue.push(currentNode.right)
      }
      else currentNode.right = null
    }

  }
  console.log("Array of nodes: ", array)
  return array[0]
}

var isBalanced = function(root) {
  function compareBranches(node) {
    let leftLength
    let rightLength

    if (node.left === null) leftLength = 1
    else leftLength = 1 + branchLength(node.left)
    if (node.right === null) rightLength = 1
    else rightLength = 1 + branchLength(node.right)

    if (Math.abs(leftLength-rightLength) > 1) result = false
    return Math.max(leftLength, rightLength) + 1
  }

  let result = true
  if (!root) return result
  else {
    compareBranches(root)
    return result
  }
} //end of isBalanced

//console.log("Tree: ", BTBuilder([1,2,2,3,3,null,null,4,4]))
//const bt = BTBuilder([1,2,2,3,3,null,null,4,4])
//const bt = BTBuilder([3,9,20,null,null,15,7])
//const bt = BTBuilder([1,2,2,3,3,null,null,4,4])
const bt = BTBuilder([1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5])

console.log('bt: ', bt)
console.log(isBalanced(bt))

