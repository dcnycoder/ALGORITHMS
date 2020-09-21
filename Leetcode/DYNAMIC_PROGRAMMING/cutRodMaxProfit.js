const prices = {
  1: 2,
  2: 5,
  5: 7,
  10: 12,
}
const rod = 10

function maxProfit(length, prices) {
  if (length === 0) return 0
  else return Math.max(prices[length], 1+maxProfit(length-1, prices))
}

console.log(maxProfit(rod, prices))
//
