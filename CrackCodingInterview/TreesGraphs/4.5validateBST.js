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

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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

var isValidBST = function(root, isValid = true) {
  function checkNodes(node, leftBound=[-Infinity, node.val], rightBound=[node.val, Infinity]) {
    if (node.left!=null) {

      checkNodes(node.left, )
    }
    if (node.right!=null) {

    }
  }
  isValid = true
  if (!root) return isValid

  checkNodes(root)
  return isValid
};
