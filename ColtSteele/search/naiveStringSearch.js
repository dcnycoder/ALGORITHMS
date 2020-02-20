//Find the number of times a substring appears in a string

let string = 'harold said haha in hamburg';
let substring = 'a';

function naiveStringSearch(string, substring) {
  let counter = 0;
  let j = 0;
  for (let i = 0; i<string.length; i++) {
    if (string[i] === substring[j]) {
      if (j<substring.length-1) j++;
      else {
        counter++;
        j = 0;
      }
    }
    //else j = 0;
  }
  return counter;
}

console.log(naiveStringSearch(string, substring))
