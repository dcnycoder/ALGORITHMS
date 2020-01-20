function clockSums () {
  let result = [];
  const clock = [1,2,3,4,5,6,7,8,9,10,11,12];
  for (let i = 0; i<clock.length; i++) {
    for (let j = i+1; j<clock.length; j++) {
      if (clock.slice(0,i).concat(clock.slice(j, clock.length)).reduce((acc,elem) => {return acc+elem}, 0) === clock.slice(i, j).reduce((acc, elem) => {return acc+elem}, 0)) {
        result.push([clock[i], clock[j]]);
      }
    }
  }
  console.log(result);
  return result;
}

clockSums();
