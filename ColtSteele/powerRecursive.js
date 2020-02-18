// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function powerRecursive(num, pow) {
  if (pow === 0) return 1;
  return num * powerRecursive(num, pow-1)
}

console.log(powerRecursive(2,0));
console.log(powerRecursive(2,2));
console.log(powerRecursive(2,4));
