let arr = [4,5,6,-1,10,200,3,2]

function bubbleSort(arr) {
  let swap = true
  for (let i=arr.length; i>0; i--) {
    if (swap === false) break
    swap = false
    for (let j=0; j<i; j++) {
      if (arr[j]>arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        swap = true
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr))
