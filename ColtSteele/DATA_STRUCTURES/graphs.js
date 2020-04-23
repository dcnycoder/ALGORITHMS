class Graph {
  constructor() {
    this.adjacencyList = {}
  }

}

let graph = new Graph
console.log(graph.addVertex('A').addVertex('B').addEdge("B", "A"))

