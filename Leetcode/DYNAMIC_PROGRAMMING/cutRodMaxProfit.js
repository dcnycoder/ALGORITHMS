const prices = {
  1: 1,
  2: 5,
  3: 8,
  4: 8.7,
  5: 10,
  6: 17,
  7: 17,
  8: 20,
  9: 24,
  10: 30
}
const rod = 8

function maxProfit(length, prices) {
  let q = -Infinity
  if (length === 0) return 0
  else
  for (let i=1; i<=length; i++) {
    let maxProfitNext = maxProfit(length-i, prices)
    q = Math.max(q, prices[length], prices[i]+maxProfitNext)
  }
  return q
}

console.log(maxProfit(rod, prices))
