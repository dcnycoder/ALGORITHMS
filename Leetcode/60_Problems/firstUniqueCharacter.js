//https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = function(s) {
    let uniqueIndex = {}
    let charOrder = []

    for (let i; i<s.length; i++) {
      if (!charCount.includes(s[i])) {
        uniqueIndex[s[i]] = i
        //charOrder.push(char)
      }
      uniqueIndex[s[i]] = -1
    }
    for (let char in charCount) {
      console.log("Char: ", char)
    }
    return -1
};