// https://leetcode.com/problems/median-of-two-sorted-arrays/

// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// You may assume nums1 and nums2 cannot be both empty.
// const arr1 = [2, 3, 4, 5];
// const arr2 = [5, 100, 102, 105];

// arr1 = [1, 3]
// arr2 = [2];

arr1 = [1, 2]
arr2 = [3, 4]

function medianOfTwoSortedArrays(arr1, arr2) {
  let length;
  let even;
  if ((arr1.length + arr2.length)%2 === 0) {
    length = (arr1.length + arr2.length)/2+1;
    even = true;
  }
  else {
    length = Math.floor(arr1.length + arr2.length)/2;
    even = false;
  }
  var result = [];
  for (let i = 0; i<length; i++) {
    if (arr1[0]<=arr2[0] || arr2[0] === undefined) {
      result.push(arr1.shift())
    }
    else result.push(arr2.shift());
  }
  console.log('result: ', result);
  if (even) {
    return (result.pop()+result.pop())/2
  }
  else return result.pop();
}

console.log(medianOfTwoSortedArrays(arr1, arr2));
