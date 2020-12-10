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

function letterCombinations(arr) {
  let result = arr[0]
  for (let i=1; i<arr.length-1; i++) { // loops through int arrays
    //console.log(`arr[i]: ${arr[i]}`)
    //let currentNumLetters = arr[i]
    let nextNumLetters = arr[i+1]
    tempResult = []
    for (let i=0; i<result.length; i++) { //internal arrays

      tempResult = tempResult.concat(nextNumLetters.map(elem => result[i]+elem))
    } //end of inner loop
    result = tempResult
  } // end of outer loop
  return result
}
console.log(letterCombinations(arr))