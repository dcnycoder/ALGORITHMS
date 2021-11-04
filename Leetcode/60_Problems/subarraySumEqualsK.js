//https://leetcode.com/problems/subarray-sum-equals-k/

//Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

const nums = [1,2,3]
const k = 3
var subarraySum = function(nums, k) {
    let slowPointer = 0
    let fastPointer = 0
    let sum = nums[slowPointer]
    let counter = 0
    
    while (slowPointer < nums.length && fastPointer < nums.length) {
      if (sum === k) {
        counter += 1
        sum = sum - nums[slowPointer]// + nums[fastPointer]
        slowPointer += 1
        //fastPointer += 1
      }
      else if (sum < k) {
        fastPointer += 1
        sum += nums[fastPointer]
        
      }
      else {
        sum -= nums[slowPointer]
        slowPointer += 1
      }

    }

    return counter
};

console.log(subarraySum(nums,k))