let arr = [4,5,6,-1,10,200,3,2]

selectionSort = (arr) => {
  let minIndex
  let temp
  for (let i=0; i<arr.length; i++) {
    if (i-1>=0 && minIndex) {
      temp = arr[i-1]
      arr[i-1] = arr[minIndex]
      arr[minIndex] = temp
    }
    minIndex = i
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j]<arr[minIndex]) {
        minIndex = j
      }
    }
  }
  return arr
}

console.log("selectionSort(arr): ", selectionSort(arr))
