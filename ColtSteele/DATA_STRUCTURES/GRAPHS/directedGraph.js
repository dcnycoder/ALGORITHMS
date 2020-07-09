class directedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!(vertex in this.adjacencyList)) {
      this.adjacencyList[vertex] = []
      return this
    }
  }
  addEdge(vertex1, vertex2) {
    if (!(vertex1 in this.adjacencyList) || (!vertex2 in this.adjacencyList)) throw Error("One or both of the vertices is not in this graph! ")
    else this.adjacencyList[vertex1].push(vertex2)
    return this
  }
  bfsDistance(vertex) { //returns a bfs tree object with distances (in nodes) from the vertex
    const list = this.adjacencyList
    let queue = [vertex]
    let path = {}
    path[vertex] = 0
    function exploreVertex(vertex) {
      let neighbors = list[vertex]
        .filter(neighbor => (!(neighbor in path) ))
      if (neighbors.length) {
        neighbors.forEach(neighbor => {
          if (!path[neighbor]) {
            path[neighbor] = path[vertex]+1
          }
        });
        queue = queue.concat(neighbors)
      }
    }
    while (queue.length) {
      let vertex = queue.pop()
      exploreVertex(vertex)
    }
    return path
  }
  dfsPrePost(vertex) {
    
  }
}

let dg = new directedGraph
dg
  .addVertex("A")
  .addVertex("B")
  .addVertex("C")
  .addVertex("D")
  .addVertex("E")
  .addVertex("F")
  .addVertex("G")

console.log('DG: ', dg)
dg
  .addEdge("A","B")
  .addEdge("A","C")
  .addEdge("A","D")
  .addEdge("B","E")
  .addEdge("B","G")
  .addEdge("E","F")


console.log('DG BFS: ', dg.bfsDistance("A"))
