//https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */

const s = "aabdccdb"
const firstUniqChar = function(s) {
    let uniqueIndex = {}

    for (let i=0; i<s.length; i++) {
      if (!(s[i] in uniqueIndex)) {
        uniqueIndex[s[i]] = i
      }
      else uniqueIndex[s[i]] = -1
    }

    for (let char in uniqueIndex) {
      if (uniqueIndex[char] != -1) {
        return uniqueIndex[char]
      }
    }
    return -1
};

console.log(firstUniqChar(s))