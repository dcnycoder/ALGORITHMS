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

function BTBuilder(arr) {
  let root = new TreeNode(arr[0])
  let stack = [root]

  for (let i=1; i<arr.length; i++) {
    let curr = stack.pop()
    if (arr[i]) {
      let left = new TreeNode(arr[i])
      curr.left = left
      stack.push(left)
    }
    else curr.left = null
    if (arr[i+1]) {
      let right = new TreeNode(arr[i+1])
      curr.right = right
      stack.push(right)
    }
    else curr.right = null
  }

  return root
}