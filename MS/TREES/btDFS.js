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