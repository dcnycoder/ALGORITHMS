const num = 7;

function recursiveFactorial(num) {
  if (num === 0) return 1;

  return num*recursiveFactorial(num-1);
}

console.log(recursiveFactorial(num));
