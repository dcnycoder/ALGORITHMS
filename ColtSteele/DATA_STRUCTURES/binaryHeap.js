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
    let maximum = this.entries.slice(0,1)
    let current = this.values.pop()
    let currentIndex = 0
    this.values[0] = current
    this.trickleDown(currentIndex, 1)
    console.log('this.values after pop: ', this.values)
    return maximum
  } //end of removeMax()

  trickleDown(currentIndex = 0) {
    //do it recursively
    let firstChildIndex = currentIndex*2+1
    let secondChildIndex = currentIndex*2+2

    //if current element's both children exist:
    if (this.values[firstChildIndex] && this.values[secondChildIndex]) {
      let swappedIndex, temp
      //swap the elements:
       swappedIndex = (this.values[firstChildIndex]>this.values[secondChildIndex])? firstChildIndex : secondChildIndex

      if (this.values[currentIndex]<this.values[swappedIndex]) {
        temp = this.values[swappedIndex]
        this.values[swappedIndex] = this.values[currentIndex]
        this.values[currentIndex] = temp

        return this.trickleDown(swappedIndex)
      }
      else return this.values //short circuit if there were no swaps
    }

    //if no more children:
    else return this.values

  } //end of trickleDown()
}

let bh = new BinaryHeap()

console.log("bh value added: ", bh.add(50).add(48).add(47).add(11).add(200).add(19).add(400).add(500).add(1).add(3))


console.log("bh.removeMax: ", bh.removeMax())
