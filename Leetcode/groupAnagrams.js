// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
//const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

//const arr = ['nea', "tea", "eat",  'aet'];
const arr = ["eat","tea","tan","ate","nat","bat"]


function groupAnagrams(array) {
  let groups = {};
  for (let word of array) {
    if (!groups.hasOwnProperty(`${word.length}`)) {
      groups[word.length] = [[word]];
    }
    else {
      for (let arr of groups[word.length]) {
      //IF ADDED === FALSE
        for (let letter of word) {
          if (arr[0].indexOf(letter) != -1) {
            if ((word.indexOf(letter) === word.length-1) && (!arr.includes(word))) {
              arr.push(word); //the word has reached the group's length and is an anagram
              //continue;
              //return;
              break; //doesn't get out of loop completely. continues ate to tan array. DOESN'T GET OF OUTER LOOP

            }
            //else continue;
        }
          else { //letter is different from current arr[0]
            if (groups[word.length].indexOf(arr) === groups[word.length].length-1 && !arr.includes(word)) {
              groups[word.length].push([word]);
              break;
            }
          }
        }
      }
    }
  }
  //return groups[word.length]; //return an array of concatenated arrays of all lengths;
  return Object.values(groups)[0];
}

console.log(groupAnagrams(arr));
