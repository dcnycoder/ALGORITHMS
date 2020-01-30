//const array = [1,2,3,4];
const array = ['a','b','c','d'];
function permutations(array, restArray = [], resultArray = []) {
  //let result = [];
  //if (array.length === 0) return [];
  //console.log('result: ', result);
  //let result = [];
  if (array.length === 0) {
    resultArray.push(restArray);
    //return resultArray;
  }
  else

  for (let i = 0; i<array.length; i++) {
    //result = [];\
    //result[i].push(array[i]);
    //console.log('result: ', result[0]);
    //result.concat(permutations(array.slice(0, i).concat(array.slice(i+1, array.length)), result));
    //resultArray.push(
      permutations(array.slice(0, i).concat(array.slice(i+1, array.length)), restArray.concat(array[i]), resultArray);
    //result.push(permutations(array.slice(0, i).concat(array.slice(i+1, array.length))));
    // result.push(permutations(array.slice(0, i).concat(array.slice(i+1, array.length))));
  }
  return resultArray;
}

console.log(permutations(array));
