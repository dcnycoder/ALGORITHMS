class directedGraph {
  construcor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!vertex in this.adjacencyList) {
      this.adjacencyList.vertex = []
      return this
    }
  }
  addEdge(vertex1, vertex2) {
    if (!vertex1 in this.adjacencyList || !vertex2 in this.adjacencyList) Error.throw("One or both of the vertices is not in this graph! ")
    else this.adjacencyList[vertex1].push(vertex2)
    return this
  }
  bfsWithDistance(vertex) {
    let queue = []
    let distance = 0
    let path = {}
    queue.push(vertex)
    function exploreVertex(vertex) {
      path[vertex] = distance
      distance+=1
      let neighbors = this.adjacencyList[vertex]
        .filter(neighbor => (!neighbor in path))
      neighbors.array.forEach(neighbor => {
        path[neighbor] = distance
      });
      queue.concat(neighbors)
    }
    while (queue.length) {
      let vertex = queue.pop()
      exploreVertex(vertex)
    }
    return path
  }
}


