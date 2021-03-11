function mergeSort(arr, start=0, end=arr.length) {
  if (arr.length = 1) return arr
  else {
    let middle = start + Math.floor((end-start)/2)
    const left = arr.slice(start, middle);
    const right = arr.slice(middle, end);
    return merge(left, right);
  }

  function merge(left, right) {
    
  }
}


let arr = [1,5,8,10,2]