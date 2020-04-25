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
    //result = []
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
    let result = [vertex]
    let stack = [vertex]
    while (stack.
      length) {
      let nextVertex = stack.shift()
      if (!result.includes(nextVertex)) result.push(nextVertex)
      let elem = this.adjacencyList[nextVertex].shift()

      while (result.includes(elem) && this.adjacencyList[nextVertex].length > 0) {
        elem = this.adjacencyList[nextVertex].shift()
      }

      nextVertex = elem
      stack.unshift(nextVertex)

    }
    return result
  }
}

let graph = new Graph
console.log(graph
  .addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addVertex('E')
  .addVertex('F')
  .addVertex('G')
  .addEdge("A", "B")
  .addEdge("A", "G")
  .addEdge("B", "C").addEdge("B", "F").addEdge("B", "E")
  .addEdge("C", "D").addEdge("C", "E").addEdge("C", "F")
  .addEdge("F", "G")
)

console.log("Graph DFS: ", graph.dfsIterative("A"))
