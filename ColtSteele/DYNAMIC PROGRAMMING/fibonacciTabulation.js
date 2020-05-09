function fibonacciTabulation(num) {
  let memo = [0, 1, 1]
  if (memo[num]) return memo[num]
  else {
    for (i = 3; i<=num; i++) {
      memo.push(memo[memo.length-1] + memo[memo.length-2])
    }
    return memo.pop()
  }

}

console.log(fibonacciTabulation(7))
