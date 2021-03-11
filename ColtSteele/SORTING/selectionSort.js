let arr = [4,5,6,-1,10,200,3,2]

selectionSort = (arr) => {
  console.log(arr)
  let minIndex
  let temp
  let swap = true
  let pass = 0
  for (let i=0; i<arr.length; i++) {
    if (swap) {
      swap = false
      if (i-1>=0 && minIndex) {
        temp = arr[i-1]
        arr[i-1] = arr[minIndex]
        arr[minIndex] = temp
      }
      minIndex = i
      for (let j=i+1; j<arr.length; j++) {
        if (arr[j]<arr[minIndex]) {
          minIndex = j
          swap = true
        }
      }
      console.log("Pass: ", pass)
      pass++
    }
  }
  return arr
}

console.log("selectionSort(arr): ", selectionSort(arr))
