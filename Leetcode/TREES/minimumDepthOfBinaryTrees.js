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
    this.val = (val != undefined? val : 0)
    this.left = (left != undefined? left : null)
    this.right = (right != undefined? right : null)
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
  if (typeof(root) != 'object') return 0
  let depth
  let queue = [[root]]
  for (let i=0; i<queue.length; i++) {


    
    if (!queue[i].length) i = i+1
    let node = queue[i].pop()
    if (node.left === null && node.right === null) {
      depth = i+1
      break
    }
    else {
      if (!queue[i+1]) queue[i+1] = []
      if (node.left!=null) {
        queue[i+1].push(node.left)
      }
      if (node.right!=null) {
        queue[i+1].push(node.right)
      }
    }
  } // end of tier walk
  return depth
}


const array = [3,9,20,null,null,15,7]
//const array = [0]
const bt = BTBuilder(array)


console.log(minDepth(bt))

