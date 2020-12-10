// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Input: ["flower","flow","flight"]
// Output: "fl"

// Input: ["dog","racecar","car"]
// Output: ""

//const arr = ["","fffsracecar","fffscar"]
const arr=['aca', 'acba'];
function longestCommonPrefix(arr) {
  //LOOP THROUGH 1ST ELEM
  let prefix = '';
  if (arr.length>0) {

    for (let i = 0; i<arr[0].length; i++) {
      for (let j = 0; j<arr.length; j++) {
        if (arr[0][i] === arr[j][i]) continue;
        else return prefix;
      }
      prefix += arr[0][i];
    }

  }
  return prefix;
}

console.log(longestCommonPrefix(arr));
