//Given a sorted array of integers and a target value, determine if there is a pair of values in the array where the average of the pair equals the target value. There may be more than one pair that matches the average target.

const arr = [1,7];

function averagePair(arr, average) {
  if (arr.length <= 1) return false;

  let begin = 0;
  let end = arr.length-1;

  while (begin<end) {
    if ((arr[begin]+arr[end])/2 < average) {
      begin++
    }
    else if ((arr[begin]+arr[end])/2 > average) {
      end--
    }
    else return true;
  }
  return false;
}

console.log(averagePair([-1,0,3,4,5,6], 4.1));
