//First Common Ancestor: design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing aditional nodes in a data structure. NODE: this is not necessarily a binary search tree.

//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.


// Note:

// All of the nodes' values will be unique.
// p and q are different and both values will exist in the binary tree.

//SOLUTION APPROACH:
//1) Run an BFS on the tree UNTIL we get both elements we are searching for. We don't need the full tree. It'll give us an array with a 2n+1, 2n+2 relation between parent and children
//2) Create an array of parents for each node given originally. Keep adding the parents to each array until there is a common parent.
