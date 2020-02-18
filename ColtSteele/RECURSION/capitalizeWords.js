//a function that capitalizes words in an array
const arr = ['hello', "its", 'me'];

function capitalizeWords(arr) {
  let result = [];
  if (arr.length === 0) return result;
  else {
    result.push(arr[0].toUpperCase());
    return result.concat(capitalizeWords(arr.slice(1)))
  }
  //return result;
}

console.log(capitalizeWords(arr));
