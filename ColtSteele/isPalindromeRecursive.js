const string = '';

function isPalindromeRecursive(string) {
  if (string.length <= 1) return true;

  const left = string.slice(0, 1);
  const right = string.slice(string.length-1);
  if (left != right) return false;
  else {
    return isPalindromeRecursive(string.slice(1,string.length-1))
  }
}

console.log(isPalindromeRecursive(string));
