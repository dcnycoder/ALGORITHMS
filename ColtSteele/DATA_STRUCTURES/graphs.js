class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!(vertex in this.adjacencyList)) this.adjacencyList[vertex] = []
    return this
  }

}

let graph = new Graph
console.log(graph.addVertex('A').addVertex('B').addEdge("B", "A"))

