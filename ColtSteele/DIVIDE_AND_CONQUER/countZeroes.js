// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array
//IMPROVEMENT: Return the index of the first 0 and the amount of zeroes in the array

//APPROACH:
//split the array in half
//if the left side ends with 0, split the left side (the beginning of the 0s is in the left side)
//if the left side ends with 1, split the right side (the whole left side is 1s)
//keep record of the first element of the array so that we know at what index 0s start
//keep splitting until we get to the element itself

function countZeroes(arr, begin=0) {
  if (arr[0] === 0) return [begin, `zeroes in array: ${arr.length}`]
  else {
    middle = Math.floor(arr.length/2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle, arr.length)
    if (left[left.length-1] === 0) {
      return countZeroes(left, begin)
    }
    else return countZeroes(right, begin+middle)
  }
}

let arr = [1,1,1,1,1,1,1,1,0,0,0]
console.log(countZeroes(arr))



