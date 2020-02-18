//a function that takes an object and collects all the string values into an array

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

collectStrings(obj) // ["foo", "bar", "baz"])

function collectStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') result.push(obj[key])
    else {
      result = result.concat(collectStrings(obj[key]))
    }
  }
  return result;
}

console.log(collectStrings(obj))
