//Multiple pointers:
//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

//isSubsequence('hello', 'hello world'); //true
const str1 = 'sing'
const str2 = 'sting'

function isSubsequence(str1, str2) {
  if (str1.length>str2.length) return false;
  let pointer1 = 0;
  let pointer2 = 0;

  while ((pointer1 < str1.length-1) && (pointer2 < str2.length-1)) {
    if (str1[pointer1] != str2[pointer2]) {
      pointer2++
    }
    else {
      pointer2++;
      pointer1++;
    }
  }
  if (pointer1 === str1.length-1) return true;
  return false;
}

console.log(isSubsequence(str1, str2));
