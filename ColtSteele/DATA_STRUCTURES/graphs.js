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
    delete this.adjacencyList[vertex]
    for (let key in this.adjacencyList) {
      if (this.adjacencyList[key].includes(vertex))
        this.adjacencyList[key] = this.adjacencyList[key].filter(elem => elem!=vertex)
    }
    return this
  }
}

let graph = new Graph
console.log(graph.addVertex('A').addVertex('B').addEdge("B", "A").removeEdge("A", "B").removeVertex("A"))
console.log(graph.addVertex('A').addVertex('B').addEdge("B", "A").removeVertex("A"))

