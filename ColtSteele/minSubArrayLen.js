//The func should return the minimal length of a contiguos subarray of which the sum is greater than or equal to the interger passed to the function. If there isn't one, return 0

const arr = [1, 0, 2, 3, 4, 5, 6, 1, 10]

function minSubArrayLen(arr, num) {
  let min = 0;
  let temp = 0;
  let sum = 0;
  let left = 0;
  let right = 0;

  //if (arr.length === 0) return 0;
  //for (let i=0; i<arr.length; i++) {
  while (right<arr.length) {

    temp = right-left;
    if (sum >= num) {
      if (temp<=min || min === 0) min = temp;

      sum-=arr[left];
      left++
      //temp--;
    }
    else {
      sum+=arr[right];
      right++;
      //temp++;
    }

  }
  return min;
}

console.log(minSubArrayLen(arr, 7))
