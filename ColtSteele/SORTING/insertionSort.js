let arr = [4,5,6,-1,10,200,3,2]

function insertionSort(arr) {
  let temp
  for (let i=1; i<arr.length; i++) {
    if (arr[i]<arr[i-1]) {
      let j = i
      while(arr[j-1]>arr[j]) {
        temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        j--
      }
    }
  }
  return arr
}

console.log(insertionSort(arr))
