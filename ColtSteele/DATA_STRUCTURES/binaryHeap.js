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
    this.trickleDown(this.values, currentIndex)


    return this
  } //end of removeMax()

  trickleDown(values, currentIndex) {
    //do it recursively with a recursive helper function:
    //or just reuse bubbleUp function by reverting it

    //get children of currentIndex:
    let child1 = values[currentIndex*2+1]
    let child2 = values[currentIndex*2+2]

    //perform bubbleUp on child1 and possibly child2 (if child1 is not larget than the currentIndex)


  } //end of trickleDown()
}

let bh = new BinaryHeap()

console.log("bh value added: ", bh.add(50).add(30).add(45).add(100).add(200).add(19).add(400))

//console.log("bh.removeMax: ", bh.removeMax())
