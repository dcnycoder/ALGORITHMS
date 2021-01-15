//Calculates factorial top down vs more traditional bottom up

function factorial(max, curr=1, result = 1) {
  if (curr === max) return result*curr
  return factorial(max, curr+1, result*curr)
}

console.log(factorial(4))