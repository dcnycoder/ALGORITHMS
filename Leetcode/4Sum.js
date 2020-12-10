// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

//https://leetcode.com/problems/4sum/

// The solution set must not contain duplicate quadruplets.

// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

const arr = [1, 0, -1, 0, -2, 2];
const target = 0;

function fourSome(arr, target) {
  let result = [];
  for (let i = 0; i<arr.length-3; i++) {
    for (let j = i+1; j<arr.length-2; j++) {
      for (let k = j+1; k<arr.length-1; k++) {
        for (let l = k+1; l<arr.length; l++) {
          if (arr[i]+arr[j]+arr[k]+arr[l] === target){
            if (!result.includes([arr[i],arr[j],arr[k],arr[l]])) result.push([arr[i],arr[j],arr[k],arr[l]]);
          }
        }
      }
    }
  }
  return result;
}

console.log(fourSome(arr, target));
