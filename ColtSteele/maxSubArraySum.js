const arr = [1,2,4,5,0,-1,7,8,10,5,8];

function maxSubArraySum(arr, num) {
  if (num>arr.length) return -1;
  max = 0;
  for (let i=0; i<num; i++) {
    max += arr[i];
  }

  let temp = max;
  for (let i = 0; i<arr.length-num-1; i++) {
    temp = temp-arr[i]+arr[i+num];
    if (temp>max) max = temp;
  }
  return max;
}

console.log(maxSubArraySum(arr, 3));
