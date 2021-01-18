//From common-sense guide to algorithms, p.198

const { array, arrayOf } = require("prop-types")

//Use recursion to write a func that accepts an array of numbers and returns a new array 
//containing just the even numbers

function arrayOfEvenNumbers(arr, index) {
  if (!arr[index]) return []
  else {
    if (arr[index]%2 === 0) {
      return arr[index]+arrayOfEvenNumbers(arr, index+1)
    }
    else return arrayOfEvenNumbers(arr, index+1)
  }
}

const arr = [1,2,3,4,5,6,7]

console.log(arrayOfEvenNumbers(arr))