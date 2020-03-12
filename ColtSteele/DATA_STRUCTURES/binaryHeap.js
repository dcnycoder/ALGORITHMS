class BinaryHeap {
  constructor() {
    this.values = []
  }
  add(value) {
    if (!this.values.length) this.values.push(value) //bh empty
    else { //bh isn't empty
      let index = this.values.push(value)-1 //returns index of a newly pushed item (array.length - 1)
      this.values = this.bubbleUp(index)
    }

    return this
  } // end of add()

  bubbleUp(index, values = this.values, parentIndex = Math.floor((index-1)/2)) {
    if (values[parentIndex]<values[index]) {
      let temp = values[parentIndex]
      values[parentIndex] = values[index]
      values[index] = temp
      return this.bubbleUp(parentIndex)
    }
    else {
      return values
    }
  }

  removeMax() {
    if (!this.values) return null
    let current = this.values.pop()
    let currentIndex = 0
    this.values[0] = current
    this.trickleDown(currentIndex, 1)
    this.trickleDown(currentIndex, 2)
    console.log('this.values after pop: ', this.values)
    return this.values
  } //end of removeMax()

  trickleDown(currentIndex = 0, childPosition) {
    //do it recursively

    //get child of currentIndex depending on childPosition (1 or 2):
    let ChildIndex = currentIndex * 2 + childPosition
    let temp

    if (this.values[ChildIndex] && this.values[ChildIndex]>this.values[currentIndex]) {
      temp = this.values[currentIndex]
      this.values[currentIndex] = this.values[ChildIndex]
      this.values[ChildIndex] = temp
      return this.trickleDown(ChildIndex, childPosition)
    }
    //if no more children:
    else return this.values

  } //end of trickleDown()
}

let bh = new BinaryHeap()

console.log("bh value added: ", bh.add(50).add(48).add(47).add(11).add(200).add(19).add(400))

console.log("bh.removeMax: ", bh.removeMax())
