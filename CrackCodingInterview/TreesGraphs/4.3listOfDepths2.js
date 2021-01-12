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

function listOfDepths2(bt, queue=[[bt.val]], index = 0) {
  if (!queue[index]) return queue
  else {
    //let newLevel = []
    const newLevel = queue[index].reduce((acc, elem) => {
      if (elem.left) acc.push(elem.left.val)
      if (elem.right) acc.push(elem.right.val)
      return acc
    }, [])
    // queue[index].forEach(elem => {
    //   if (elem != null) newLevel.push(elem)
    // })
    if (newLevel.length>0) queue.push(newLevel)
    return listOfDepths2(bt, queue, index+1)
  }
}

let bt = BTBuilder([3,9,20,null,null,15,7])
console.log(listOfDepths2(bt))