//const string = 'abdsflkjfdaaaaaabcsdfjl';
//const string = 'aaasbabc;;sdfjl';
const string = '';
//const subString = 'abc;;';
const subString = '';


function findSubstring (string, subString) {
  let begin = null;
  let j = 0;
  for (let i = 0; i<string.length; i++) {
    if ((j>0 && !begin) && (string[i] === subString[0])) {
      begin = i;
    }
    if (string[i] === subString[j]) {
      //if (j===0 && !begin) {
      j+=1;
      if (j === subString.length) return i-subString.length+1;
    }
    else {
      j = 0;
      if (begin!=null) i = begin-1;
      begin = null;
    }
  }
  return -1;
}

console.log(findSubstring(string,subString))
