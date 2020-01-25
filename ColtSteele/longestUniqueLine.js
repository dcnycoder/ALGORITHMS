const string = 'hellokitty';

function longestUnique(string) {
  let uniques = {};
  let first = 0;
  let last = 0;

  for (let i=0; i<string.length; i++) {
    if (!(string[i] in uniques)) {
      uniques[string[i]] = null;
      last = string[i];
    }
    else {
      first = string[i];
    }
  }
  console.log(`uniques: ${uniques}`);
  return [first, last]
}

console.log(longestUnique(string));
