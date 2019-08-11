string = 'jhkjhhjhjhjjhcbaaggaabc,mhkjhjhkj';

function findLongestPalindrome (string) {
  let center = [];
  let palindrome = '';
  let longestPalindrome = '';
  let i=null;
  let j=null;
  function checkLeftRight(center) {
      i = center[0];
      j = center[center.length-1];
      palindrome = string.slice(i, j+1);
      // i--;
      // j++;
      while (i>-1 && j<string.length) {
        if (string[i-1] === string[j+1]) {
          palindrome = string[i-1]+palindrome+string[j+1];
          if (palindrome.length > longestPalindrome.length) longestPalindrome = palindrome;
        }
        else {
          break;
        }
        i--;
        j++;
      }
      palindrome = string[center[1]];
      if (string[i] === string[j]) {
        palindrome = string[i]+palindrome+string[j];
        if (palindrome.length > palindrome) longestPalindrome = palindrome;
      }
    } //end of checkLeftRight

  for (let i=1; i<string.length; i++) {
    if (string[i] === string[i-1]) {
      center = [i-1, i];
      checkLeftRight(center);
    }
    else if (string[i] === string[i-2]) {
      center = [i-2, i-1, i];
      checkLeftRight(center);
    }
    } // end of main loop
    return longestPalindrome;
  }



console.log(findLongestPalindrome(string));
