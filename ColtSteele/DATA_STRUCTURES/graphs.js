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
        this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2), 1)
      if (this.adjacencyList[vertex2].includes(vertex1))
        this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1), 1)
      return this
    }
  }
}

let graph = new Graph
console.log(graph.addVertex('A').addVertex('B').addEdge("B", "A").removeEdge("A", "B"))

