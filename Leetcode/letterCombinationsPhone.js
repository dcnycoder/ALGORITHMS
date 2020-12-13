//https://leetcode.com/problems/letter-combinations-of-a-phone-number/

//Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
//Return the answer in any order.
//A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

const arr = [['a','b','c'], ['d', 'e', 'f'], ['g','h','i']]

function letterCombinations(arr, result=[]) {
  if (!arr.length) return result
  if (!result.length) {
    result = arr.shift()
    letterCombination(arr, result)
  }
  else {
    for (let i=0; i<arr[0].length; i++) {
      result 
    }
  }
    for (let letter in arr[0]) {
      result = result.concat(letterCombinations())
    }
    return result

}

//console.log(letterCombinations(arr))

// let arr = ['a', 'b', 'c']
// let result = []
// for (let i=0; i<arr.length; i++) {
//   result = result.map(elem => elem + arr[i])
//   console.log('result: ', result)
// }
// console.log(result)