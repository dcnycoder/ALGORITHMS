//Definition for a binary tree node.
function Node(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
/**
* @param {TreeNode} root
* @return {boolean}
*/

function BTBuilder(array) {
array[0] = new Node(array[0])
for (let i=0; i<array.length; i++) {
  if (array[i]!=null) {
    let currentNode = array[i]
    if (array[2*i+1] && array[2*i+1] != null) {
      array[2*i+1] = new Node(array[2*i+1])
      currentNode.left = array[2*i+1]
    }
    else currentNode.left = null

    if (array[2*i+2] && array[2*i+2] != null) {
      array[2*i+2] = new Node(array[2*i+2])
      currentNode.right = array[2*i+2]
    }
    else currentNode.right = null
  }

}
return array[0]
}

const bt = BTBuilder([3,9,20,null,null,15,7])
const bt1 = BTBuilder([1,2,2,3,3,null,null,4,4])
console.log("BT: ", bt1)

function checkBalanced(node, result = true) {
  function nodeDepth(node) {
    if (!node.left && !node.right) return 1
    else return Math.max(nodeDepth(node.left), nodeDepth(node.right)) + 1
  }

  // if (result = false) return result
  // else 
  result = checkBalanced(node.left) && checkBalanced(node.right)
  return result
  //return (Math.abs(checkBalanced(node.left) - checkBalanced(node.right)) < 1)
}


//   if (!node) return 0
//   //if (result === false) return result

//   //return (!checkBalanced(node.left) || !checkBalanced(node.right))? false : {
//   if ((checkBalanced(node.left)===false || checkBalanced(node.right)===false)
//    || (Math.abs(checkBalanced(node.left)) - checkBalanced(node.right))>1) return false
  
//   //else return Math.abs(checkBalanced(node.left) - checkBalanced(node.right)) + 1
//   else return Math.max(checkBalanced(node.left), checkBalanced(node.right)) + 1
// }

console.log('BT check: ', checkBalanced(bt))