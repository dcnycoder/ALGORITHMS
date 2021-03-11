function mergeSort(arr, start=0, end=arr.length) {
  if (arr.length === 1) return arr
  else {
    let middle = start + Math.floor((end-start)/2)
    const left = arr.slice(start, middle);
    const right = arr.slice(middle, end);
    return merge(left, right);
  }

  function merge(left, right) {
    let result = []
    left = mergeSort(left);
    right = mergeSort(right);

    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex<left.length && rightIndex<right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        result.push(left[leftIndex])
        leftIndex++
      }
      else {
        result.push(right[rightIndex])
        rightIndex++
      }
    }
    result = result.concat(left.slice(leftIndex, left.length));
    result = result.concat(right.slice(rightIndex, right.length))

    return result;
  }
}


let arr = [1,5,8,10,2, 200, -1, -8]
console.log(mergeSort(arr))