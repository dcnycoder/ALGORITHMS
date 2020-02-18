const arr = [1,2,3,4];

function productOfArray(arr) {
  if (arr.length === 0) return 1;

  let number = arr.shift();
  return number*productOfArray(arr);
}

console.log(productOfArray(arr));
