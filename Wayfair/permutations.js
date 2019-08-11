const array = [1,2,3];

function permutations(array, result = []) {
  //let result = [];
  //if (array.length === 0) return [];
  //console.log('result: ', result);
  if (array.length === 1) return array[0];
  else

  for (let i = 0; i<array.length; i++) {
    result = [];
    //result[i].push(array[i]);
    result[i] = array[i];
    //console.log('result: ', result[0]);
    result.concat(permutations(array.slice(0, i).concat(array.slice(i+1, array.length)), result));
    //result.push(permutations(array.slice(0, i).concat(array.slice(i+1, array.length))));
    // result.push(permutations(array.slice(0, i).concat(array.slice(i+1, array.length))));
  }
  return result;
}

console.log(permutations(array));
