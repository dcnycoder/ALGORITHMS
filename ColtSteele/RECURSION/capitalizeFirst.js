//a recursive function. given an array of strings, capitalize the first letter of each string in the array;

const arr = ['car', 'taco', 'banana'];

function capitalizeFirst(arr) {
  let result = [];
  if (arr.length === 0) return result;
  arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
  result.push(arr[0])
  result = result.concat(capitalizeFirst(arr.slice(1)));
  return result;
}

console.log(capitalizeFirst(arr));
