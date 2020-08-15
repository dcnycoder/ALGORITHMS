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
    //console.log("current node: ", currentNode)
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


};

let root = new Node ()



const array = [3,9,20,null,null,15,7]

console.log(BTBuilder(array))

