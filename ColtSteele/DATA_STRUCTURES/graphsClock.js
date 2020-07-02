class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!(vertex in this.adjacencyList)) this.adjacencyList[vertex] = []
    return this
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (!(vertex2 in this.adjacencyList[vertex1])) this.adjacencyList[vertex1].push(vertex2)
      if (!(vertex1 in this.adjacencyList[vertex2])) this.adjacencyList[vertex2].push(vertex1)
      return this
    }
  }
  addEdgeSorted(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (!(vertex2 in this.adjacencyList[vertex1])) this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex1].sort()
      if (!(vertex1 in this.adjacencyList[vertex2])) this.adjacencyList[vertex2].push(vertex1)
      this.adjacencyList[vertex2].sort()
      return this
    }
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
    }
    delete this.adjacencyList[vertex]
    return this
  }

  segmentDFS(vertex, clock, segment = {}) {
    clock+=1
    //segment.push({vertex: [clock]})
    segment[vertex] = [clock]
    //take care of vertex pre-order:
    let neighbors = this.adjacencyList[vertex]
    for (let i = 0; i<neighbors.length; i++) {
      //clock+=1
      let neighbor = neighbors[i]
      //if (!segment.includes(neighbor)) {
      if (!(neighbor in segment)) {
        this.segmentDFS(neighbor, clock, segment)
      }
    }
    //take care of vertex post-order
    clock += 1
    segment[vertex].push(clock)
    return segment
  }

  dfs() {
    let result = []
    let visited = {}

    for (let vertex in this.adjacencyList) {
      console.log('vertex: ', vertex)
      let clock = 0
      if (!(vertex in visited)) {
        let discoveredSegment = this.segmentDFS(vertex, clock)
        result.push(discoveredSegment)
        visited = {...visited, ...discoveredSegment}
      }
    }
    return result
  }

  dfsIterative(vertex) {
    let result = []
    let stack = [vertex]

    while (stack.length) {
      if (!(result.includes(stack[0]))) result.push(stack[0])
      let elem = stack.shift()
      let elemArray = this.adjacencyList[elem]

      stack = elemArray.filter(elem => !result.includes(elem)).concat(stack)
    }

    return result
  }

  bfsIterative(vertex) {
    let stack = [vertex]
    let result = []

    while (stack.length) {
      let elem = stack.shift()
      const elemArray = this.adjacencyList[elem]

      if (!result.includes(elem)) result.push(elem)

      stack = stack.concat(elemArray.filter(elem => !(result.includes(elem))))

    }
    return result
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

let simpleGraph = new Graph
simpleGraph
  .addVertex("A")
  .addVertex("B")
  .addVertex("C")
  .addVertex("D")
  //.addVertex("K")
simpleGraph
.addEdgeSorted("A", "B")
.addEdgeSorted("B", "C")
//.addEdgeSorted("C", "A")
.addEdgeSorted("A", "D")

let graph = new Graph
graph
  .addVertex("A")
  .addVertex("B")
  .addVertex("C")
  .addVertex("D")
  .addVertex("E")
  .addVertex("F")
  .addVertex("G")
  .addVertex("H")
  .addVertex("I")

graph
  .addEdgeSorted("A", "B")
  .addEdgeSorted("A", "E")
  .addEdgeSorted("B", "C")
  .addEdgeSorted("B", "E")
  .addEdgeSorted("C", "F")
  .addEdgeSorted("F", "I")
  .addEdgeSorted("D", "G")
  .addEdgeSorted("D", "H")
  .addEdgeSorted("E", "F")
  .addEdgeSorted("G", "H")
console.log(simpleGraph.adjacencyList)
//console.log(simpleGraph.segmentDFS("A"))
//console.log(graph.segmentDFS("A"))
console.log(simpleGraph.dfs())

// for (let key in graph.adjacencyList) {
//   console.log(key)
// }

// dfs(vertex) {
//   for (let key in graph
// }


// dfs(vertex, result = []) {
//   if (!result.includes(vertex)) {
//     result.push(vertex)
//     if (this.adjacencyList[vertex].length>0) {
//       for (let i = 0; i<this.adjacencyList[vertex].length; i++) {
//         result.concat(this.dfs(this.adjacencyList[vertex][i], result))
//       }
//       return result
//     }
//   }
//   else return result
// }
