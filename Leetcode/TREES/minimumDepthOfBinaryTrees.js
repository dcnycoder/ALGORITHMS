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
    this.val = (val? val : 0)
    this.left = (left? left : null)
    this.right = (right? right : null)
  }
}

function BTBuilder(array) {
  let root = new Node(array[0])
  let queue = [root]
  for (let i=1; i<array.length; i++) {
    let currentNode = queue.pop()
    console.log("current node: ", currentNode)
    currentNode.left = new Node(array[i])
    currentNode.right = new Node(array[i+1])
    queue.push(currentNode.left, currentNode.right)
    i+=1
  }
  return root
}

var minDepth = function(root) {


};

let root = new Node ()



const array = [3,9,20,null,null,15,7]
console.log(BTBuilder(array))


console.log("Root: ", root)
