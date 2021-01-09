function checkPalindrome(str) {
  let start = 0
  let end = str.length-1
  result = true
  while (start <= end && result!=false) {
    console.log("arr[start]/arr[end]: ", str[start], str[end])
    if (str[start] === str[end]) {
      start+=1
      end-=1
    }
    else result = false
  }
  return result
}

const str = 'ba'
console.log("Result: ", checkPalindrome(str))