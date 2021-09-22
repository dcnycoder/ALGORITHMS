const { array } = require("prop-types")

let arr2 = [5,7,10,14]
//let arr1 = [5]
let arr1 = [1,2,8,11]

function mergeArrays(arr1, arr2) {
  let p1 = 0
  let p2 = 0
  let result = []
  while (arr1[p1]!=undefined || arr2[p2]!=undefined) {
    if (arr1[p1]<arr2[p2] || arr2[p2] === undefined) {
      result.push(arr1[p1])
      p1+=1
    }
    else {
      result.push(arr2[p2])
      p2+=1
    }
  }
  return result
}

console.log(mergeArrays(arr1, arr2))