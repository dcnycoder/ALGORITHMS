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


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
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

var isSubtree = function(s,t) {
  function dfsCompare(sNode, tNode, identical=true) {
    if (sNode.value != tNode.value) {
      identical = false
      return identical
    }
    else {
      if (!(s.left===null || identical===false)) {
        identical = dfsCompare(s.left)
      }
      if (!(s.right===null || identical===false)) {
        identical = dfsCompare(s.right)
      }
      return identical
    }
  }
  let result = false
  let queue = t
  while (queue.length) {
    let node = queue.pop()
    if (node.value === s.value) {
      result = dfsCompare(s,t)
      return result
    }
  }
  return result
}

