// A child is running up a staircase with n steps and can
// hop either 1 step, 2 steps or 3 steps at a time, 
// implement a method to count how many possible ways
// the child can run up the stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const variations = [1,2,3]
const steps = 5

function tripleStep(steps, result = []) {
  if (!steps || steps === 0) return result
  if (result.length === 0) {
    for (let i=0; i<variations.length; i++) {
      if (variations[i] <= steps) {
        //result.push(tripleStep(steps-variations[i], [variations[i]]))
        result = result.concat(tripleStep(steps-variations[i], [variations[i]]))
        return result
      }
    }
  }
  else {
    let tempResult = []
    for (let i=0; i<variations.length; i++) {
      let variation = variations[i]
      if (variation<=steps) {
        tempResult = tempResult.concat(tripleStep(steps-variation, result+variation))
      }
    }
    result = tempResult
    return result
} 
  return result
} //end of tripleStep

console.log("result: ", tripleStep(steps))
