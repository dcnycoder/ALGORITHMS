//implement a func to check if a binary tree is a binary search tree
//https://leetcode.com/problems/validate-binary-search-tree/

// 98. Validate Binary Search Tree
// Medium

// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// Example 1:

//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true
// Example 2:

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

//SOLUTION APPROACH:
//Make sure that elements in the left and right trees fit in the  certain range. For example, the element in the right branch of the element in the left branch of the root not only has to be larger than the parent node, but also SMALLER than the root node
//Has to be done recursively top to bottom

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
  array[0] = new Node(array[0])
  for (let i=0; i<array.length; i++) {
    if (array[i]!=null) {
      let currentNode = array[i]
      if (array[2*i+1] && array[2*i+1] != null) {
        array[2*i+1] = new Node(array[2*i+1])
        currentNode.left = array[2*i+1]
      }
      else currentNode.left = null

      if (array[2*i+2] && array[2*i+2] != null) {
        array[2*i+2] = new Node(array[2*i+2])
        currentNode.right = array[2*i+2]
      }
      else currentNode.right = null
    }

  }
  return array[0]
}

var isValidBST = function(node, leftBound=[leftMin = -Infinity, leftMax = (node? node.val : null)], rightBound=[rightMin = (node? node.val : null), rightMax = Infinity], isValid = true) {
  //pass the right and left boundary.
  if (!node) return isValid
  if (isValid === false) return isValid//base case - short-circuit
  else {
    if (node.left!=null) {
      if (node.left.val > leftMin && node.left.val < leftMax) {
        leftMax = node.left.val
        isValid = isValid && isValidBST(node.left, [leftMin, leftMax], [leftMax, node.val], isValid)
      }
      else {
        isValid = false
        return isValid
      }
    }
    if (node.right!=null) {
      rightMin = node.right.val
      if (node.right.val > rightMin && node.right.val < rightMax) {
        isValid = isValid && isValidBST(node.right, [node.val, rightMin], [rightMin, rightMax], isValid)
      }
      else {
        isValid = false
        return isValid
      }
    }
    return isValid
  }
} //end of isValidBST

function inOrder(node) {
  let result = []
  if (!node) return result
  else {
    result = preOrder(node.left).concat(result)
    result.push(node.val)
    result = result.concat(preOrder(node.right))
  }
  return result
}

//const bt = BTBuilder([1,2,2,3,3,3,3,4,4,4,4,4,4,null,null,5,5])
const bt = BTBuilder([3,1,5,0,2,4,6,null,null,null,3])
//const bt = BTBuilder([10,5,15,null,null,6,20])


console.log('bt: ', bt)
//console.log(isValidBST(bt))
console.log(inOrder(bt))
