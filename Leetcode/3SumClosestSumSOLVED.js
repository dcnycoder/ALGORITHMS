// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example:

// Given array nums = [-1, 2, 1, -4], and target = 1.

// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

//TRY POINTERS INSTEAD OF NESTED LOOPS

// const nums = [2, 1, 3, 5, 6, 7, 12];
// const number = 5;

//Given array nums = [-1, 2, 1, -4], and target = 1.
const nums = [-1, 2, 1, -4];
const number = 1;

function threeSumClosest(nums, number) {
  nums = nums.sort((a, b) => a > b);
  console.log('nums sorted: ', nums);
  let difference = Infinity;
  let sum = null;
  //SETTING UPPER LIMIT:
  // for (let i = nums.length-1; i>0; i--) {
  //   if (nums[0] + nums[i] >= number) limit = i;
  // }
  // console.log('limit: ', limit);
  let prevDifference = Infinity;

  for (let i = 0; i<nums.length-2; i++) {
    prevDifference = Infinity;
    for (let j = i+1; j<nums.length-1; j++) {
      for (let k = j+1; k<nums.length; k++) {
        if (Math.abs(nums[i]+nums[j]+nums[k] - number) <= prevDifference) {
          prevDifference = Math.abs(nums[i]+nums[j]+nums[k] - number);
          if (Math.abs(nums[i]+nums[j]+nums[k] - number) < difference) {
            difference = Math.abs(nums[i]+nums[j]+nums[k] - number);
            sum = nums[i]+nums[j]+nums[k];
          }
        }
        else break;
      }
    }
  }
  return sum;
}

console.log(threeSumClosest(nums, number));
