function fibonacci(num, stored = {}) {
  if (num in stored) return stored[num]
  else {
    if (num === 1 || num === 2) {
      stored[num] = 1
      return 1
    }

    else {
      const result = fibonacci(num-1, stored) + fibonacci(num-2, stored)
      stored[num] = result
      return result
    }
  }
}

console.log(fibonacci(500))
