//https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


// Input: root = [3,9,20,null,null,15,7]
// Output: 3

//  * Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth = function(root) {
    
}

function BTBuilder(arr) {
  arr[0] = new TreeNode(arr[0])
  for (let i=0; i<arr.length; i++) {
    if (arr[i] != null) {
      let curr = (typeof arr[i] === 'number')? 
      new TreeNode(arr[i]) : arr[i]
      if (arr[2*i+1]) {
        let left = new TreeNode(arr[2*i+1])
        arr[2*i+1] = left
        curr.left = left
      }
      else curr.left = null
      if (arr[2*i+2]) {
        let right = new TreeNode(arr[i+2])
        arr[2*i+2] = right
        curr.right = right
      }
      else curr.right = null
    }
  }
  return arr[0]
}

const arr = [3,9,20,null,null,15,7]
console.log("Tree: ", BTBuilder(arr))