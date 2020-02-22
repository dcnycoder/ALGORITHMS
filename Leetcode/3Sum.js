// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//https://leetcode.com/problems/3sum/

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

const arr = [-4, -2, -1, 0, 1, 2, 4];
//const arr = [1];
let num = 1;
let k;
let temp;

function threeSum(arr, num) {
  let result = [];
  for (let i=0; i<arr.length-2; i++) {
    for (let j=0; j<arr.length-1; j++) {
      temp = arr[i] + arr[j];
      k = arr.length-1;
      while ((temp + arr[k])>num || k>j) {
        k-=1;
      }
      if (temp + arr[k] === num) result.push([arr[i], arr[j], arr[k]])
      else continue;

    }
  }
  return result;
  }

console.log(threeSum(arr, num));
