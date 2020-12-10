//https://leetcode.com/problems/longest-substring-without-repeating-characters/
//Given a string, find the length of the longest substring without repeating characters.

//const string = 'abcbca';
//const string = ' ';
const string = "tmmzuxt";

function longestSubstring(string) {
  if (string.length = 0) return 0;
  let letters = {};
  let counter = 0;
  let max = 0;

  for (let i=0; i<string.length; i++) {

    if (!(string[i] in letters)) {
      counter+=1;
      letters[string[i]] = i;
    }
    else {
      if (counter>max) max = counter;
      counter = counter - letters[string[i]];
    }
  }
  if (counter > max) max = counter;
  return max;
}

console.log(longestSubstring(string));
