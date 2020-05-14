//accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1

function findRotatedIndex(arr, elem, begin=0, end=arr.length-1) {
    while (begin<end-1) {
      let middle = Math.floor((begin+end)/2)
      //figure out if the element is the middle index:
      console.log("Begin/Middle/End: ", begin, middle, end)
      console.log("Left/Right: ", arr.slice(begin, middle), arr.slice(middle, end))
      if (elem === arr[middle]) return middle

      //figure out if the element is in the left side:
      //we are considering 2 cases: there is no pivot point or there is a pivot point
      else if ((arr[begin]<=elem && elem<=arr[middle]) || ((arr[begin]>=arr[middle]) && (arr[begin]<=elem || elem<=arr[middle]))) {
        return findRotatedIndex(arr, elem, begin, middle)
      }
      //figure out if the element is in the right side:
      //we are considering 2 cases: there is no pivot point or there is a pivot point
      else if ((arr[middle]<=elem && elem<=arr[end]) || ((arr[middle]>=arr[end]) && (arr[middle]<=elem || elem<=arr[end]))) {
        return findRotatedIndex(arr, elem, middle, end)
      }
      else return -1
    }
    return -1
  }

//}

const arr = [41,42,45,47,1,2,3,4,5,39,40]
//const arr = [6,7,8,9,1,2,3,4]
let arr1 = [6,7,8,9,1,2,3,4]
console.log(findRotatedIndex(arr, 39))


