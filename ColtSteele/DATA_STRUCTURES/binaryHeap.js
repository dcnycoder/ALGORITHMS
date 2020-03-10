class BinaryHeap {
  constructor() {
    this.values = []
  }
  add(value) {
    if (!this.values.length) this.values.push(value) //bh empty
    else { //bh isn't empty
      let index = this.values.push(value)-1 //returns index of a newly pushed item (array.length - 1)
      let values = this.values

      function bubbleUp(index, parentIndex = Math.floor((index-1)/2)) {
        if (values[parentIndex]<values[index]) {
          let temp = values[parentIndex]
          values[parentIndex] = values[index]
          values[index] = temp
          return bubbleUp(parentIndex)
        }
        else {
          return values
        }
      }

      this.values = bubbleUp(index)
    }

    return this
  }
}

let bh = new BinaryHeap()

console.log("bh value added: ", bh.add(50).add(30).add(45).add(100).add(200))
