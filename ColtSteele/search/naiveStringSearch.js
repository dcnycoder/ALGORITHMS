//Find the number of times a substring appears in a string

let string = 'hrrold said haha in hamburg';
let substring = 'ha';

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
    else j = 0;
  }
  return counter;
}

console.log(naiveStringSearch(string, substring))
