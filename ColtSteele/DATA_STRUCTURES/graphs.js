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

class weightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    return this
  }
  addEdge(vertex1, vertex2, weight) {
    let list = this.adjacencyList
    if (list[vertex1] && list[vertex2]) {
      list[vertex1].push({node: vertex2, weight: weight})
      list[vertex2].push({node: vertex1, weight: weight})
    }
    else throw Error("Not all vertices are present!")
    return this
  }
  bfs(vertex) {
    let stack = [vertex]
    let result = []
    while (stack.length) {
      let elem = stack.shift()
      let elemArray = this.adjacencyList[elem]

      for (let i=0; i<elemArray.length; i++) {
        if (!result.includes(elemArray[i].node) && !stack.includes(elemArray[i].node)) stack.push(elemArray[i].node)
      }
      result.push(elem)
    }
    return result
  }

  djikstra(vertex1, vertex2) {
    let unvisited = this.bfs(vertex1)
    let visited = []
    if (!unvisited.includes(vertex2)) throw Error("Vertex2 is not in this graph!")
    let pq = new PriorityQueue
    pq.enqueue(vertex1, 0)
    let previous = {}
    previous[vertex1] = null
    let distances = {}
    distances[vertex1] = 0

    //Populate distances object with initial distances (Infinity)
    for (let i=1; i<unvisited.length; i++) {
      distances[unvisited[i]] = Infinity
    }

    //Start looping in order of priority:
    while (pq.queue.length && unvisited.length) {
      console.log("pq in the beginning: ", pq)
      let vertex = pq.dequeue()
      console.log("vertex: ", vertex)

      console.log("unvisited in the beginning: ", unvisited)
      let prevVertex = vertex
      //Loop through vertex neighbors and record their distances in the distances object:
      let vertexArray = this.adjacencyList[vertex.node]
      for (let i=0; i<vertexArray.length; i++) {

        if (unvisited.includes(vertexArray[i].node)) {
          //Loop through the distances object using the previous object until the element is vertex1
          //OR just calculate the shortest distance to the prev vertex and add the distance from prev vertex to A

          let elem = vertexArray[i]

          let distance = elem.weight + prevVertex.weight
          if (distance < distances[elem.node]) {
            distances[elem.node] = distance
            previous[elem.node] = prevVertex
            pq.enqueue(elem.node, distance)
          }
        }
      } //end of looping through vertex neighbors

      //delete object from unvisited array:
      unvisited.splice(unvisited.indexOf(vertex.node), 1)
      if (vertex.node === vertex2) break
      //delete unvisited[unvisited.indexOf(vertex)]
      console.log('unvisited after splice: ', unvisited)

    } //end of looping through pq
    return distances

  } //end of djikstra's algorithm
} // end of weighted graph class

class PriorityQueue {
  constructor() {
    this.queue = []
  }
  enqueue(node, weight) {
    this.queue.push({node, weight})
    this.queue.sort((a, b) => a.weight-b.weight)
    return this
  }
  dequeue() {
    return this.queue.shift()
  }
}

class BHPriorityQueue {
  constructor() {
    this.queue = []
  }
  enqueue(value) {
    this.queue.push(value)
    let parentIndex = Math.floor((this.queue.length-1)/2)
    let newElemIndex = this.queue.length - 1

    while (value>this.queue[parentIndex]) {
      let temp = this.queue[parentIndex]
      this.queue[parentIndex] = value
      this.queue[newElemIndex] = temp
      newElemIndex = parentIndex
      parentIndex = Math.floor(newElemIndex/2)
    }
    if (value>this.queue[parentIndex]) {
      this(parentIndex)
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

let bh = new BHPriorityQueue

console.log(
  "Original: ", bh.enqueue(100).enqueue(85).enqueue(75).enqueue(35).enqueue(78).enqueue(74).enqueue(73)
)
console.log(
  "Max removed: ", bh.removeMax()
)
console.log("After max removed: ", bh.queue)

console.log(
  "Max removed: ", bh.removeMax()
)
console.log("After max removed: ", bh.queue)

console.log(
  "Max removed: ", bh.removeMax()
)
console.log("After max removed: ", bh.queue)




//let pq = new PriorityQueue
// console.log(pq.enqueue("A", 3).enqueue("B", 1).enqueue("C", 0))
// console.log('pq dequeue: ', pq.dequeue())
//console.log(pq.enqueueSort("A", 3).enqueueSort("B", 0).enqueueSort("C", 1))



let wg = new weightedGraph()
//console.log(
wg
  .addVertex("A")
  .addVertex("B")
  .addVertex("C")
  .addVertex("D")
  .addVertex("E")
  .addVertex("F")
    .addEdge("A", "B", 4)
    .addEdge("A", "C", 2)
    .addEdge("B", "E", 3)
    .addEdge("C", "D", 2)
    .addEdge("C", "F", 4)
    .addEdge("D", "E", 3)
    .addEdge("D", "F", 1)
    .addEdge("E", "F", 1)
//)

console.log('wg.adjacencylist["A"]: ', wg.adjacencyList["A"])
console.log('wg bfs: ', wg.bfs("A"))
console.log(wg.djikstra("A", "C"))

// console.log("wg('A'): ", wg.adjacencyList['A'])

// let graph = new Graph
// console.log(graph
//   .addVertex('A')
//   .addVertex('B')
//   .addVertex('C')
//   .addVertex('D')
//   .addVertex('E')
//   .addVertex('F')
//   .addVertex('G')
//   .addEdge("A", "B")
//   .addEdge("A", "G")
//   .addEdge("B", "C").addEdge("B", "F").addEdge("B", "E")
//   .addEdge("C", "D").addEdge("C", "E").addEdge("C", "F")
//   .addEdge("F", "G")
// )

let graph = new Graph
// console.log(graph
//   .addVertex('A')
//   .addVertex('B')
//   .addVertex('C')
//   .addVertex('D')
//   .addVertex('E')
//   .addVertex('F')
//   .addEdge("A", "B").addEdge("A", "C")
//   .addEdge("C", "E")
//   .addEdge("E", "F")
//   .addEdge("F", "D")
//   .addEdge("D", "E")
//   .addEdge("D", "B"))

// console.log(graph
//   .addVertex('A')
//   .addVertex('B')
//   .addVertex('C')
//   .addVertex('D')
//   .addVertex('E')
//   .addEdge("A", "B").addEdge("A", "C")
//   .addEdge("B", "D")
//   .addEdge("C", "D").addEdge("C", "E")
//   .addEdge("D", "E")
// )

// console.log(graph
//   .addVertex('A')
//   .addVertex('B')
//   .addVertex('C')
//   .addVertex('D')
//   .addVertex('F')
//   .addEdge("A", "B").addEdge("A", "C").addEdge("A", "F")
//   .addEdge("C", "D")
// )
// console.log("Graph DFS: ", graph.dfsIterative("A"))
// console.log("Graph: ", graph)
// console.log("BFS: ", graph.bfs("A"))
