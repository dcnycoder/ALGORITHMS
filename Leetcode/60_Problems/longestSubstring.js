let str = "abcabcaa"

function longestSubstring(str) {
  let max = 0
  let counter = 0
  let start = 0
  let chars = {}

  for (let i=0; i<str.length; i++) {
    if (!(str[i] in chars)) {
      chars[str[i]] = i
      counter+=1
    }
    else {
      if (i>=start) {
        if ((counter>max)) {
          max = counter
          
        }
        counter = i-start//chars[str[i]]
        start = chars[str[i]]+1
        chars[str[i]] = i
      }
    }
  }
  if (counter>max) max = counter
  return max
}

console.log(longestSubstring(str))