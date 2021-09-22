// Given a string s, find the length of the longest substring without repeating characters.
const str = 'abcadfa'
const str1 = "abcabcbb"
const str2 = "pwwkew"
const str3 = ' '

var lengthOfLongestSubstring = function(s) {
    let charIndices = {}
    let max = 0
    let start = counter = 0
    for (let i=0; i<s.length; i++) {
      const char = s[i]

      if (char in charIndices) {
        if (charIndices[char]>=start) {
          //max = ((counter - charIndices[char])>max)? counter - start : max
          max = (counter>max)? counter : max
          counter = counter - charIndices[char] - 1

          start = charIndices[char] + 1
        }
      }
      counter += 1
      charIndices[char] = i
    
    }
    return Math.max(max, counter)
}

console.log(lengthOfLongestSubstring(str3))

//OLD:
// var lengthOfLongestSubstring = function(s) {
//   let charIndices = {}
//   let max = 0
//   let start = counter = 0
//   //let counter = 0
//   for (let i=0; i<s.length; i++) {
//     const char = s[i]
//     counter += 1
//     // if (!(char in charIndices)) {
//     //   max += 1
//     // }
//     if (char in charIndices) {
//       if (charIndices[char]>=start) {
//         //max = ((counter - charIndices[char])>max)? counter - start : max
//         max = (counter>max)? counter : max
//         counter = counter - charIndices[char] - 1
//         start = charIndices[char] 
//       }
//     }       
//     charIndices[char] = i
  
//   }
//   return max
// }
