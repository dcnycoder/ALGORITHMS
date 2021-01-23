let string = 'Hello'

function revStringInPlace(string) {
  for (let i=string.length-1; i>0; i--) {
    insertIndex = string.length-i-1
    string = string.slice(0,insertIndex) + string[string.length-1] + string.slice(insertIndex, string.length-1)
    console.log(string)
  }
}

revStringInPlace(string)

let s = 'abc'
s[0]='h'
console.log(s)