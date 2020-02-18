const arr = [1, [2,3]];

function flattenArrayRecursive(arr) {
  //var result = [];
  //if (arr.length===0) return result;
  // let elem = arr.shift();

  // if (!Array.isArray(elem)) result.push(elem);
  // result.concat(flattenArrayRecursive(elem));
  // //result.concat(flattenArrayRecursive(arr));


  // return result;
  var result = [];
  for (let i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) result = result.concat(flattenArrayRecursive(arr[i]))
    else result.push(arr[i]);

  }
  return result;
}



console.log(flattenArrayRecursive(arr));

//console.log(Array.isArray([1,2]));
