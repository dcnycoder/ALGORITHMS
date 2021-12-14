//https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


// Input: root = [3,9,20,null,null,15,7]
// Output: 3

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
 * @return {number}
 */

const maxDepth = function(root) {
    
}

const BTBuilder(arr) {
  let result
  for (let n=0; n<arr.length; n++) {
    let curr = new TreeNode(arr[n])
    if (result === undefined) result = curr
    let left = arr[2n+1]
    let right = arr=[2n+2]
    if (left !== undefined) {
      curr.left = new TreeNode
    }
  }
  return result
}