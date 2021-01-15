//this function flattens a nested array of any depth

function flattenNestedList(arr, result = []) {
  arr.forEach(elem => {
    if (!Array.isArray(elem)) result.push(elem)
    else flattenNestedList(elem, result)
  })
  return result
}

const arr = [[1,1],2,[1,1]]
const arr1 = [1,[4,[6]]]
console.log(flattenNestedList(arr1))