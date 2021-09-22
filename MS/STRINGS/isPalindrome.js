str = "A man, a plan, a canal: Panama"

function isPalindrome(str) {
  str = str.toLowerCase()
  let cleanStr = ''
  for (let i=0; i<str.length; i++) {
    if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122) cleanStr += str[i]
  }
  console.log('cleanStr: ', cleanStr)

  let begin = 0
  let end = cleanStr.length-1
  while (begin<=end) {
    if (cleanStr[begin] != cleanStr[end]) return false
    begin+=1
    end-=1
  }
  return true
}

console.log(isPalindrome(str))