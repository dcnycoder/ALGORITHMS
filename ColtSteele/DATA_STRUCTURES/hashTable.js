class HashTable {
  constructor(size=153) {
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

  set(value) {
    console.log('value before hashing: ', value)
    const index = this.hash(value[0])
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
    console.log(this.keyMap[index], index)
  }

  get(value) {

  }
}

let ht = new HashTable
console.log('ht hash hello: ', ht.set(['blue', '#394043']))
console.log('ht hash hello: ', ht.set(['blue', '#394043']))

