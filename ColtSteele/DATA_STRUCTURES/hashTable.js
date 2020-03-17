class HashTable {
  constructor(size=153) {
    this.keyMap = new Array(size)
  }

  hash(key) {
    const primeNumber = 31
    let total = 0
    for (let i = 0; i<Math.min(key.length || 100); i++) {
      let value = key[i].charCodeAt()-96
      console.log(value)
      total = (total*primeNumber+value)%this.keyMap.length
    }
    return total
  }
}

let ht = new HashTable
console.log('ht hash hello: ', ht.hash('hello'))
