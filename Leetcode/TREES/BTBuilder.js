function BTBuilder(arr) {
  arr[0] = new TreeNode(arr[0])
  for (let i=0; i<arr.length; i++) {
    if (arr[i] != null) {
      let curr = (typeof arr[i] === 'number')? 
      new TreeNode(arr[i]) : arr[i]
      if (arr[2*i+1]) {
        let left = new TreeNode(arr[2*i+1])
        arr[2*i+1] = left
        curr.left = left
      }
      else curr.left = null
      if (arr[2*i+2]) {
        let right = new TreeNode(arr[i+2])
        arr[2*i+2] = right
        curr.right = right
      }
      else curr.right = null
    }
  }
  return arr[0]
}