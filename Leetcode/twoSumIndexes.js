//https://leetcode.com/problems/two-sum/submissions/const nums = [2, 7, 11, 15];
const target = 9;
//return [0,1]

function twoSumIndices(arr, target) {
  let keyValues = [];
  for (let i = 0; i<arr.length; i++) {
    if (target - arr[i] in keyValues) {
      return [keyValues[target-arr[i]], i];
    }
    else keyValues[arr[i]] = i;
  }
}
console.log(twoSumIndices(nums, target));
