// https://leetcode.com/problems/permutations/

// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  //let globalResult = []
  return recursivePermutation(nums)
  // for (let i=0; i<nums.length; i++) {
  //   globalResult.concat(recursivePermutation())
  // }
  function recursivePermutation(array, perm=[], globalResult) {
    for (let i = 0; i<array.length; i++) {
      if (!array.length) {//base case
        globalResult.push(perm)
        return globalResult
      }
      else {
        perm.push(array[i])
        return recursivePermutation(array.slice(i+1), perm)
      }
      //globalResult.push(recursivePermutation)
    }
    //return result
  }
  //return globalResult
}

function


const array = [1,2,3]
console.log(permutation(array))
