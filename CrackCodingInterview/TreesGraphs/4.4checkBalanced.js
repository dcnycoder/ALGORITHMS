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
    let currentNode = queue.shift() //was pop()
    if (array[2*i+1] != null) {
      currentNode.left = new Node(array[2*i+1])
      queue.push(currentNode.left)
    }
    else currentNode.left = null

    //was: if (array[i] != null) {
    if (array[2*i+2] != null) {
      currentNode.right = new Node(array[i])
      queue.push(currentNode.right)
    }
    else currentNode.right = null
    i+=1
  }
  return root
}

var isBalanced = function(root) {
  let result = true
  if (!root) return result
  else {
//The function below runs a BFS, finds and returns the shallowest and deepest branch heights
  function minMaxDifference(root) {
    let queue = [root]
    let level = 0
    let min = undefined
    let max = 0
    while (queue.length) {
      let length = queue.length
      level += 1
      for (let i=0; i<length; i++) {
        let node = queue.pop()
        if (node.left===null || node.right===null) {
          if (min===undefined) min = level
          else if (level>max) {
            max = level
            if ((max-min)>1) result = false
          }
        }
        if (node.left!=null) queue.push(node.left)
        if (node.right!=null) queue.push(node.right)
      }
    } // end of bst walk
    console.log("min: ", min)
    console.log('max: ', max)
    return result
  } //end of minMaxDifference

  return minMaxDifference(root)

  }
}

//console.log("Tree: ", BTBuilder([1,2,2,3,3,null,null,4,4]))
//const bt = BTBuilder([1,2,2,3,3,null,null,4,4])
//const bt = BTBuilder([3,9,20,null,null,15,7])
//const bt = BTBuilder([1,2,2,3,3,null,null,4,4])
const bt = BTBuilder([5,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5])

console.log('bt: ', bt)
console.log(isBalanced(bt))

