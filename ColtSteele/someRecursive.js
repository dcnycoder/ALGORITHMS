//write a recursive func that accepts an array and a callback. The func returns true if a single value in the array returns true when passed to the callback. Otherwise returns false;

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb) {
  // console.log('callback: ', callback)
  // console.log(callback(arr.pop()));
  if (arr.length === 0) return false;
  const elem = arr.pop();
  // (callback(elem))? true : someRecursive(arr, cb);
  if (cb(elem) === true) return true
  else return someRecursive(arr, cb)
}


// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false

//someRecursive([4,6,8], val => val > 10); // false
console.log(someRecursive([4,6,8], greaterThan)); // false

