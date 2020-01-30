const arr = [1,2,3,4,5,6,7,8,9];

function oddArrayValues(arr, result=[]) {
  if (arr.length === 0) {
    return result;
  }
  const char = arr.shift();
  if (char%2===0) result.push(char)
  oddArrayValues(arr, result);
}

const result = oddArrayValues(arr);

console.log('Result: ', result)

