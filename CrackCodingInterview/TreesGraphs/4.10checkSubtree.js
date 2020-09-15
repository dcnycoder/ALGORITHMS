// T1 and T2 are two very large binary trees with T1 much bigger than T2. Create an algorithm to determine if T2 is a subtree of T1.
// A tree T2 is a subtree of T1 if there exists a node in T1 such that the subtree of n is identical to T2. That is, if you cut off the tree at node n, the two trees would be identical.

// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.


// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

//Definition for a binary tree node.
function Node(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function BTBuilder(array) {
  array[0] = new Node(array[0])
  for (let i=0; i<array.length; i++) {
    if (array[i]!=null) {
      let currentNode = array[i]
      if ((array[2*i+1] != undefined) && (array[2*i+1] != null)) {
        array[2*i+1] = new Node(array[2*i+1])
        currentNode.left = array[2*i+1]
      }
      else currentNode.left = null

      if ((array[2*i+2] != undefined) && (array[2*i+2] != null)) {
        array[2*i+2] = new Node(array[2*i+2])
        currentNode.right = array[2*i+2]
      }
      else currentNode.right = null
    }
  }
  return array[0]
} // end of BTBuilder

var isSubtree = function(s,t) { //done with recursion
  function dfsCompare(sNode, tNode, identical=true) {
    if (sNode.val != tNode.val || identical === false) {
      identical = false
      return identical
    }
    else {
      if (!(sNode.left===null || identical===false)) {
        identical = dfsCompare(sNode.left, tNode.left, identical)
      }
      if (!(sNode.right===null || identical===false)) {
        identical = dfsCompare(sNode.right, tNode.right, identical)
      }
      return identical
    }
  }
  let result = false
  let queue = [t]
  console.log("Queue: ", queue)
  while (queue.length) {
    let node = queue.pop()
    if (node.val === s.val) {
      result = dfsCompare(s,node)
      return result
    }
    else {
      if (node.left!=null) queue.unshift(node.left)
      if (node.right!=null) queue.unshift(node.right)
    }
  }
  return result
}

var isSubtree1 = function(s,t) { //2 arrays
  let queue = []
  if (t.indexOf(s[0]!=-1)) {
    queue.push([0,t.indexOf(s[0])])
    while (queue.length) {
      let [sIndex, tIndex] = queue.pop()
      if (s[sIndex]!=t[tIndex]) return false
      else {
        if (sIndex*2+1<=sIndex.length) queue.push([sIndex*2+1, tIndex*2+1])
        if (sIndex*2+2<=sIndex.length) queue.push([sIndex*2+2, tIndex*2+2])
      }
    } //end of while loop
    return true
  }
  else return false
}

// const t = BTBuilder([10,5,15,3,7])
// const s = BTBuilder([5,3,7])

let t = [3,4,5,1,2]
let s = [4,1,2]
//let t = s = []
// t = BTBuilder(t)
// s = BTBuilder(s)

console.log(isSubtree1(s,t))
