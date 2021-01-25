class Node {
  constructor(val, left, right) {
    this.val = (val === undefined)? 0 : val
    this.left = (left === undefined)? null : left
    this.right = (right === undefined)? null : right
  }
}

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
} // end of BTBuilder

//in-order: L, C, R
function btDFS(node) {
  let result
  if (node === null) return []
  else {
    result = btDFS(node.left).concat(node.val).concat(btDFS(node.right))
  }
  return result
}

const bt = BTBuilder([1,2,3,4,5,6,7,8])
console.log("BT: ", bt)
console.log(btDFS(bt))