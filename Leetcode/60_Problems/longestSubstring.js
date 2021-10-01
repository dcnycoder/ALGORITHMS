let str = 'abcabc'

function longesetSubstring(str) {
  let max = 0
  let start = 0
  let chars = {}

  for(let i=0; i<str.length; i++) {
    if (!(chars.contains(str[i]))) {
      chars[str[i]] = i
      //max+=1
    }
    else {
      if (i>start) {
        if ((i-start>max)) max = i-start
        start = chars[chars[i]]
      }
    }
  }

  return max
}