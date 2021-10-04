let str = 
"aabaab!bb"

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
      if (chars[str[i]]>=start) {
        if ((counter>max)) max = counter
        start = chars[str[i]]
        counter = i-start//chars[str[i]]
        chars[str[i]] = i
      }
      else {
        chars[str[i]] = i
        counter+=1
      } 
    }
    
  }
  if (counter>max) max = counter
  return max
}

console.log(longestSubstring(str))