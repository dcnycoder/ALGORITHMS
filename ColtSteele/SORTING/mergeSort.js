//let arr = [4,5,6,-1,10,200,3,2]
let arr = [1,-100,5,4,7,4,3,9]
//let arr = [4,5,6,-1]
function mergeSort(arr) {
  if (arr.length<=1) {
    return arr
  }
  else {
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle, arr.length)
    console.log("Left/Right", left, right)
    return merge(mergeSort(left), mergeSort(right))
  }

  function merge(left, right) {
    let result = []
    while (left.length || right.length) {
      if (!left.length) {
        result = result.concat(right)
        return result
      }
      else if (!right.length) {
        result = result.concat(left)
        return result
      }

      else {
        if (left[0]>=right[0]) result.push(right.shift())
        else result.push(left.shift())
      }
    }
    return result
  }
}

console.log("Merge sort result: ", mergeSort(arr))
