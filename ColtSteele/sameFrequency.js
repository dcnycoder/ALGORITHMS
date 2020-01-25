const int1 = 182;
const int2 = 318;

function sameFrequency(int1, int2) {
  //Edge cases:
  console.log('int1 length: ', int1.toString().length);
  if (int1.toString().length != int2.toString().length) return false;

  let counter = {};
  int1 = int1.toString().split('');
  int2 = int2.toString().split('');

  while (int1.length>0) {
    let last1 = int1.pop();
    if (!(last1 in counter)) {
      counter[last1] = 1;
    }
    else counter[last1] +=1;

    let last2 = int2.pop();
    if (!(last2 in counter)) {
      counter[last2] = -1;
    }
    else counter[last2] -=1;
  }
  for (key in counter) {
    if (counter[key] != 0) return false;
  }
  console.log(`counter: `, counter)
  return true;

}

console.log(sameFrequency(int1, int2));
