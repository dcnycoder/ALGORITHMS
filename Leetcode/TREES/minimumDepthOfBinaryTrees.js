//https://leetcode.com/problems/minimum-depth-of-binary-tree/

// 111. Minimum Depth of Binary Tree (Easy)
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2

class Node {
  constructor (val, left, right) {
    this.val = (val? val : null)
    this.left = (left? left : null)
    this.right = (right? right : null)
  }
}

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

var minDepth = function(root) {
  let depth = 0
  let queue = {1: root}
  for (let tier in queue) {
    if (!queue[tier].length) tier += 1
    let node = queue[tier].pop()
    if (node.left === null && node.right === null)
    break
    else {
      if (!queue[tier+1]) queue[tier+1] = []
      if (node.left!=null) {
        queue[tier+1].push(node.left)
      }
      if (node.right!=null) {
        queue[tier+1].push(node.right)
      }
    }
  } // end of tier walk
  return depth
};

let root = new Node ()



const array = [3,9,20,null,null,15,7]
const bt = BTBuilder(array)

console.log(BTBuilder(array))

