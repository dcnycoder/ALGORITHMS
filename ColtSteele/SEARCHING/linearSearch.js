const arr = [1, 2, 3, 4, 5];

function linearSearch(arr, num) {
  let result = arr.reduce(
    (acc, elem, index) => {
      if (elem === num) {
        return acc = index;
      }
      return acc;
    }, -1)
  return result;
}

console.log("search result: ", linearSearch(arr, 1));
