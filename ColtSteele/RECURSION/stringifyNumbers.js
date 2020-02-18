//A function that takes an object, finds the numeric values and return the same object with numbers converteed to strings.

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

function stringifyNumbers(obj) {
  let result = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      result[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      result[key] = stringifyNumbers(obj[key]);
    } else {
      result[key] = obj[key]
    }
  }
  return result;
}

console.log(stringifyNumbers(obj))
