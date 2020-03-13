class Node {
  constructor(priority, value) {
    this.priority = priority
    this.value = value
  }
}

class PriorityQueue {
  constructor() {
    this.entries = []
  }
  add(priority, value) {
    const node = new Node(priority, value)
    if (!this.entries.length) this.entries.push(node) //bh empty
    else { //bh isn't empty
      let index = this.entries.push(node)-1 //returns index of a newly pushed item (array.length - 1)
      this.entries = this.bubbleUp(index)
    }

    return this
  } // end of add()

  bubbleUp(index, entries = this.entries, parentIndex = Math.floor((index-1)/2)) {
    if (entries[parentIndex] && entries[parentIndex].priority<entries[index].priority) {
      let temp = entries[parentIndex]
      entries[parentIndex] = entries[index]
      entries[index] = temp
      return this.bubbleUp(parentIndex)
    }
    else {
      return entries
    }
  }

  removeMax() {
    if (!this.entries) return null
    let maximum = this.entries.shift()
    let current = this.entries.pop()
    let currentIndex = 0
    this.entries[0] = current
    this.trickleDown(currentIndex, 1)
    console.log('this.entries after pop: ', this.entries)
    return maximum
  } //end of removeMax()

  trickleDown(currentIndex = 0) {
    //do it recursively
    let firstChildIndex = currentIndex*2+1
    let secondChildIndex = currentIndex*2+2

    //if current element's both children exist:
    if (this.entries[firstChildIndex] && this.entries[secondChildIndex]) {
      let swappedIndex, temp
      //swap the elements:
       swappedIndex = (this.entries[firstChildIndex].priority>this.entries[secondChildIndex].priority)? firstChildIndex : secondChildIndex

      if (this.entries[currentIndex].priority<this.entries[swappedIndex].priority) {
        temp = this.entries[swappedIndex]
        this.entries[swappedIndex] = this.entries[currentIndex]
        this.entries[currentIndex] = temp

        return this.trickleDown(swappedIndex)
      }
      else return this.entries //short circuit if there were no swaps
    }

    //if no more children:
    else return this.entries

  } //end of trickleDown()
}

let pq = new PriorityQueue()
console.log(pq.add(1, 100).add(4, 200).add(2, 300).add(40, 10))

