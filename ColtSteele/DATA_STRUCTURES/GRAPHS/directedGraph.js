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

  SegmentDFSPrePost(vertex, counter = {'clock': 0}, path = {}, visited = {}) {
    counter['clock']+=1
    if (!(vertex in visited)) {
      path[vertex] = [counter['clock']]
      visited[vertex] = true
      let neighbors = this.adjacencyList[vertex].filter(elem => !(elem in visited))
        for (let i = 0; i<neighbors.length; i++) {
          // path = this.dfsPrePost(neighbors[i], clock, path, visited)
          this.SegmentDFSPrePost(neighbors[i], counter, path, visited)
        }
      //}
    }


    if (path[vertex].length<2) {
      counter['clock']+=1
      path[vertex].push(counter['clock'])
    }


    return path

  } //end of dfsPrePost
}

// let dg = new directedGraph
// dg
//   .addVertex("A")
//   .addVertex("B")
//   .addVertex("C")
//   .addVertex("D")
//   .addVertex("E")
//   .addVertex("F")
//   .addVertex("G")

// console.log('DG: ', dg)
// dg
//   .addEdge("A","B")
//   .addEdge("A","C")
//   .addEdge("A","D")
//   .addEdge("B","E")
//   .addEdge("B","G")
//   .addEdge("E","A")
//   .addEdge("E","F")

  let bg = new directedGraph
bg
  .addVertex("s")
  .addVertex("z")
  .addVertex("y")
  .addVertex("x")
  .addVertex("w")
  .addVertex("v")
  .addVertex("u")
  .addVertex("t")

console.log('DG: ', bg)
bg
  .addEdge("s","z")
  .addEdge("s","w")
  .addEdge("z","y")
  .addEdge("z","w")
  .addEdge("y","x")
  .addEdge("w","x")
  .addEdge("x","z")
  .addEdge("v","w")
  .addEdge("v","s")
  .addEdge("t","v")
  .addEdge("t","u")
  .addEdge("u","v")

//   let dg1 = new directedGraph
// dg1
//   .addVertex("A")
//   .addVertex("B")
//   .addVertex("C")
//   //.addVertex("D")

// console.log('DG: ', dg1)
// dg1
//   .addEdge("A","B")
//   //.addEdge("B","A")
//   // .addEdge("B","C")
//   // .addEdge("B","D")
//   // .addEdge("C","A")
//   .addEdge("A","C")


//console.log('DG BFS: ', dg.bfsDistance("A"))
console.log("DG1: ", bg)
console.log('DG DFS: ', bg.SegmentDFSPrePost("s"))
