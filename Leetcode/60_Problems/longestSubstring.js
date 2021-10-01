let str = 'abcabcda'

function longesetSubstring(str) {
  let max = 0
  counter = 0
  let start = 0
  let chars = {}

  for(let i=0; i<str.length; i++) {
    if (!(str[i] in chars)) {
      chars[str[i]] = i
      max+=1
    }
    else {
      if (i>start) {
        if ((counter>max)) {
          max = counter
          
        }
        counter = i-chars[str[i]]
        start = chars[str[i]]
      }
    }
  }
  return max
}

console.log(longesetSubstring(str))