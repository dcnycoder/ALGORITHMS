const string = 'abc'

function stringPermutations(str, result=[]) {
  if (!str.length) return []
  else {
    let tempResult = []
    for (let i=0; i<str.length; i++) {
      tempResult = tempResult.concat(str[i]+stringPermutations(str.splice(i,1)))
  
    }
    result = tempResult
    return result
  }
}