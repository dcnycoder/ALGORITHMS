class DirectedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!(vertex in this.adjacencyList)) this.adjacencyList[vertex] = []
    return this
  }
  addEdgeSorted(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      throw Error("The origin vertex is not in the graph!")
    }
    else {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex1].sort()
    }
    return this
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (this.adjacencyList[vertex1].includes(vertex2))
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(elem => elem != vertex2)
      if (this.adjacencyList[vertex2].includes(vertex1))
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(elem => elem != vertex1)
      return this
    }
  }
  removeVertex(vertex) {
    for (let key in this.adjacencyList) {
      console.log('key: ', key, vertex)
      this.removeEdge(key, vertex)
      // if (this.adjacencyList[key].includes(vertex))
      //   this.adjacencyList[key] = this.adjacencyList[key].filter(elem => elem!=vertex)
    }
    delete this.adjacencyList[vertex]
    return this
  }

  dfs(vertex, result = []) {
    if (!result.includes(vertex)) {
      result.push(vertex)
      if (this.adjacencyList[vertex].length>0) {
        for (let i = 0; i<this.adjacencyList[vertex].length; i++) {
          result.concat(this.dfs(this.adjacencyList[vertex][i], result))
        }
        return result
      }
    }
    else return result
  }

}

class BHPriorityQueue {
  constructor() {
    this.queue = []
  }
  enqueue(value, newElemIndex = null) {
    if (newElemIndex === null) {
      this.queue.push(value)
      newElemIndex = this.queue.length - 1
    }

    let parentIndex = Math.floor((newElemIndex-1)/2)
    if (parentIndex < 0) return this.queue
    else {
      let condition //to enqueue numbers and letters correctly:
      if (typeof value === 'number') {
        condition = value>this.queue[parentIndex]
      }
      else if (typeof value === 'string') {
        condition = value<this.queue[parentIndex]
      }
         if (condition) {
          let temp = this.queue[parentIndex]
          this.queue[parentIndex] = value
          this.queue[newElemIndex] = temp
          newElemIndex = parentIndex
          this.enqueue(value, newElemIndex)
         }
         else return this.queue
    }

    return this
  } // end of enqueue

  percolateDown(index) {
    let value = this.queue[index]
    let leftChildIndex = index*2+1
    let rightChildIndex = index*2+2
    let leftChild = this.queue[leftChildIndex]
    let rightChild = this.queue[rightChildIndex]
    let swapIndex
    let temp

    (rightChild>leftChild) ? swapIndex = rightChildIndex : swapIndex = leftChildIndex
    if (this.queue[swapIndex] > value) {
      temp = this.queue[swapIndex]
      this.queue[swapIndex] = this.queue[index]
      this.queue[index] = temp
      this.percolateDown(swapIndex)
    }

    else return this.queue
  }

  removeMax() {
    let max = this.queue.shift()
      this.queue.unshift(this.queue.pop())
      this.percolateDown(0)
    return max
  }

} // end of Binary Heap Priority Queue

let graph = new DirectedGraph
graph.addVertex("A").addVertex("B")
graph.addEdgeSorted("A", "Z").addEdgeSorted("A", "C").addEdgeSorted("A", "B").addEdgeSorted("A", "Y").addEdgeSorted("A", "F").addEdgeSorted("A", "D").addEdgeSorted("A", "W")
console.log(graph.adjacencyList["A"])
console.log("A>Z", "A">"Z")
console.log("Y<B", "Y"<"B")
