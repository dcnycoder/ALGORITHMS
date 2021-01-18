//From common-sense guide to algorithms, p.198

//Use recursion to write a func that accepts an array of strings and returns the total number of characters
//across all the strings.

function totalNumOfChars(arr, index=0) {
  if (!arr[index]) return 0
  else {{
    return arr[index].length+totalNumOfChars(arr, index+1)
  }}
}

let arr = ['ab','c','def','ghi']

console.log(totalNumOfChars(arr))