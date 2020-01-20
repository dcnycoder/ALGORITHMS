const arr = [-12, -8, -6, 0, 3, 5, 9, 13, 17];

function sumZero(arr) {
    let first = 0;
    let last = arr.length-1;

    while (first != last) {
      if (Math.abs(arr[first]) > Math.abs(arr[last])) {
        first+=1;
      }
      else if (Math.abs(arr[first]) < Math.abs(arr[last])) {
        last-=1;
      }
      else return [first, last];
    }
    return -1;
  }

console.log('sumZero: ', sumZero(arr));
