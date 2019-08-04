//const A = [3,5,-4,8,11,1,-1,6];
//const A = [1,2,3,4,5,6,7,8,9,15];
const A = [3,15, 100, 14];
//const A = [4,6];
const sum = 18;
//[-1,11]

function twoNumberSum(array, targetSum) {
  let result = [];
  let arrayObj = {};
  array.map(elem => {
    if ((targetSum-elem) in arrayObj) {
      result.push(elem, targetSum-elem);
    }
    arrayObj[elem] = null;
  });
  return result.sort((a,b) => a-b);
}

console.log(twoNumberSum(A, sum));

