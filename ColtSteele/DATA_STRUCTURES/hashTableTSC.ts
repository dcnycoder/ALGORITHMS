class HashTable {
  //keyMap: Array<Array>
  keyMap: [][] = [[], [], []]
  constructor(size: number = 153) {
    this.keyMap = new Array(size)
  }

  hash(key) {
    const primeNumber = 31
    let total = 0
    for (let i = 0; i<Math.min(key.length || 100); i++) {
      let value = key[i].charCodeAt()
      total = (total*primeNumber+value)%this.keyMap.length
    }
    return total
  }

  set(value: []) {
    console.log('value before hashing: ', value)
    const index = this.hash(value[0])
    console.log('index: ', value[0], index)
    if (!this.keyMap[index]) this.keyMap[index] = [value]
    else {
      let valuePresent = this.keyMap[index].reduce((acc, elem) =>
        {
          return acc || (value[0] === elem[0])? true : false
        }
      , false)
      console.log('valuePresent: ', valuePresent)
      if (!valuePresent) this.keyMap[index].push(value)
    }
    //console.log(this.keyMap[index], index)
  }

  get(value) {
    //find the corresponding index in this.keyMap and return it's value
    const index = this.hash(value)
    let result = undefined
    for (let i=0; i<this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === value) result = this.keyMap[index][i][1]
    }
    return result
  }

  keys() { //returns an array of HT keys
    //arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
    //let result = []
    // let result = this.keyMap.map(elem => {
    //   //console.log("elem: ", elem)
    //   //let result = []
      // if (elem.length>0) {
      //   console.log("elem: ", elem)
      //   return elem.map(value => {
      //     return value[0]
      //   })
      // }
    //   else return
    // })

    let result: [[]] = this.keyMap
      .filter((elem) => elem.length>0)
      .reduce((acc, elem) => {
        console.log('acc: ', acc)
        console.log('elem in reduce ', elem)
        if (elem.length>1) {
          acc = acc.concat(
            elem.map(value => {
              return value[0]
            })
          )
          return acc
        }
        else {
          acc = acc.push(elem[0])
          return acc
        }

      }, [])


      // .map(elem => {
      //   //if (elem.length>0) {
      //     console.log("elem: ", elem)
      //     return elem.map(value => {
      //       console.log('value: ', value)
      //       console.log('value[0]: ', value[0])
      //       return value[0]
      //     })
      //   //}
      // })
    return result
  }

  values() { //returns an array of HT values

  }
}

let ht = new HashTable
console.log('ht hash hello: ', ht.set(['blue', '#394043']))
console.log('ht hash hello: ', ht.set(['green', '#399043']))
console.log('ht hash hello: ', ht.set(['red', '#356883']))

//console.log('ht get blue: ', ht.get('blue'))
//console.log('ht get green: ', ht.get('gree'))

console.log("Ht.keys(): ", ht.keys())

