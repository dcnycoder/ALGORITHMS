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

const arr = '23'

function letterCombinations(number, result=[]) {
  let digitLetters = {
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  if (!number.length) return result
  if (!result.length) {
    result = digitLetters[number[0]]
    return letterCombinations(number.slice(1), result)
  }
  else {
    let temp_result = []
    let arr = digitLetters[number[0]]
    for (let i=0; i<arr.length; i++) {
      temp_result = temp_result.concat(result.map(elem => elem+arr[i]))
    }
    result = temp_result
  }
  return letterCombinations(number.slice(1), result)
}

console.log(letterCombinations(arr))