const arr = [1,2,3,4,5,6,7,8,9];

function oddArrayValuesHelperRecursion(arr) {
  let result = [];

  function helper(arr) {
    if (arr.length === 0) return arr;
    let number = arr.shift();
    if (number%2 === 0) result.push(number);
    helper(arr);
  }
  helper(arr)
  return result;
}

console.log(oddArrayValuesHelperRecursion(arr));
