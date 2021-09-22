let string = 'Hello'
let string1 = ['']

//OLD WITH SLICES: 
// function revStringInPlace(string) {
//   for (let i=string.length-1; i>0; i--) {
//     insertIndex = string.length-i-1
//     string = string.slice(0,insertIndex) + string[string.length-1] + string.slice(insertIndex, string.length-1)
//     console.log(string)
//   }
// }

function revStringInPlace(string) {
  arr = string.split('')
  console.log("init arr: ", arr)
  let begin = 0
  let end = string.length-1
  while (begin <= end) {
    let temp = string[begin]
    arr[begin] = arr[end]
    arr[end] = temp
    begin+=1
    end-=1
  }
  return arr.join('')
}

console.log(revStringInPlace(string))