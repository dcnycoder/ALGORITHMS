function Node(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
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

function maxDepth(bt, queue = [bt], levels = 0) {
  if (!queue.length) return 0
  else {
    let newQueue = queue.reduce((acc, elem) => {
      if (elem.left) acc.push(elem.left)
      if (elem.right) acc.push(elem.right)
      return acc
    }, [])
    queue = newQueue
    levels = 1 + maxDepth(bt, queue, levels)
    return levels
  }
}

let bt = BTBuilder([50,25,100,15,30,null,150, 7])
console.log(maxDepth(bt))