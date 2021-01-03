https://leetcode.com/problems/binary-tree-level-order-traversal/

// 102. Binary Tree Level Order Traversal
// Medium

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]


//Definition for a binary tree node.
 function Node(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */

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

var levelOrder = function(root) {
  let result = []
  if (!root) return result
  let queue = [root]
  let length

  while (queue.length) {
    result.push([])
    length = queue.length
    for (let i=0; i<length; i++) {

      elem = queue.pop()
      result[result.length-1].push(elem.val)
      if (elem.left) queue.unshift(elem.left)
      if (elem.right) queue.unshift(elem.right)
    }
  }
  return result
}

const array = [10,5,15,null,null,6,20]
const bt = BTBuilder(array)
console.log("BT: ", bt)
console.log(levelOrder(bt))
