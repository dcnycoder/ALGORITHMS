// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

//const arr = [
//   [1,2,3,4],
//   [5,6,7,8],
//   [9,10,11,12],
//   [13,14,15,16]
// ]

const arr = [1]
snail = function(array) {
  if (array.length === 1) return array[0]
  let snail = []
  let rightBoundary = array.length-1
  let leftBoundary = 0
  let upperBoundary = 0
  let lowerBoundary = array.length-1

  for (let i=upperBoundary; i<=lowerBoundary; i++) {
    //TOP LEFT TO RIGHT WALK
    for (let j=leftBoundary; j<=rightBoundary; j++)
    {
      snail.push(array[i][j])
    }
    //RIGHT TOP TO BOTTOM WALK
    for (let k=i+1; k<lowerBoundary; k++) {
      snail.push(array[k][rightBoundary])
      //console.log("snail: ", snail)
    }
    //BOTOM RIGHT TO LEFT WALK
    for (let l=rightBoundary; l>=leftBoundary; l--) {
      if (lowerBoundary!=upperBoundary) snail.push(array[lowerBoundary][l])
    }
    //LEFT BOTTOM TO TOP WALK
    for (let m=lowerBoundary-1; m>upperBoundary; m--) {
      snail.push(array[m][leftBoundary])
    }
    lowerBoundary-=1
    leftBoundary+=1
    rightBoundary-=1
    upperBoundary+=1
  } // end of main loop
}
//console.log(snail(arr))
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
