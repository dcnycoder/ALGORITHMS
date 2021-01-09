//https://www.lintcode.com/problem/palindrome-permutation/description

/**
 * @param s: the given string
 * @return: if a permutation of the string could form a palindrome
 */

//Solution approach:
//If the length of the string (spaces omitted) is odd, one odd element count is permitted. If not, only even count is possible.
const string = 'ab    tttbba'

const canPermutePalindrome = function (s) {
  let letterCount = {}
  let totalLetters = 0
  for (let i=0; i<s.length; i++) {
    if (s[i] != ' ') {
      totalLetters += 1
      if (!(s[i] in letterCount)) letterCount[s[i]] = 1
      else letterCount[s[i]]+=1
    }
  }
  let countOdd = 0
  for (let letter in letterCount) {
    if (letterCount[letter]%2===1) countOdd+=1
    if (countOdd>1) {
      return false
    }
  }
  if ((countOdd && totalLetters%2===1) || (!countOdd && !(totalLetters%2===1))) return true
  else return false
}

console.log(canPermutePalindrome(string))


