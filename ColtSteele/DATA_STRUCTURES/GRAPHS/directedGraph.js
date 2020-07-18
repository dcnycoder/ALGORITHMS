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

  segmentDFSPrePost(vertex, counter = {'clock': 0}, path = {}, visited = {}) {
  //counter is an object because it is passed by reference, therefore becomes sort of a global varibale, thus allowing a more concise segmentDFSPrePost function(without a necessity for recursive sub-function)

    if (!(vertex in visited)) {
      counter['clock']+=1
      path[vertex] = [counter['clock']]
      visited[vertex] = true
      let neighbors = this.adjacencyList[vertex].filter(elem => !(elem in visited))
        for (let i = 0; i<neighbors.length; i++) {
          this.segmentDFSPrePost(neighbors[i], counter, path, visited)
        }
    }
      if (path[vertex].length<2) {
        counter['clock']+=1
        path[vertex].push(counter['clock'])
      }
    return path

  } //end of dfsPrePost
  dfsTraversal() {
    let visited = {}
    let tree = []
    let counter = {clock: 0}
    let sortedVertices = []
    for (let vertix in this.adjacencyList) {
      sortedVertices.push(vertix)
    }
    sortedVertices = sortedVertices.sort()
    for (let i=0; i<sortedVertices.length; i++) {
      const vertex = sortedVertices[i]
      if (!(vertex in visited)) {
        console.log("vertex/visited: ", vertex, visited)
        let segment = this.segmentDFSPrePost(vertex, counter, {}, visited)
        tree.push(segment)
        visited = {...visited, ...segment}
      }
    }
    return tree
  }

  findCycles() { //iterative solution
    let cyclesPresent = false
    let visited = {}
    for (let vertex in this.adjacencyList) {
      if (!(vertex in visited)) {
        let stack = [vertex]
        while (stack.length) {
          let vertex = stack.pop()
          if (!(vertex in visited)) {
            visited[vertex] = true
            let neighbors = this.adjacencyList[vertex]
            stack = stack.concat(neighbors)
          }
          else {
            cyclesPresent = true
            return cyclesPresent
          }
        }
      }
    }
    return cyclesPresent
  }

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
  .addVertex("a")
  .addVertex("b")

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

  .addEdge("a","b")

  console.log('DG: ', bg)

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
//console.log("BG : ", bg)
// console.log('DG DFS: ', bg.segmentDFSPrePost("s"))

//console.log('BG DFS: ', bg.dfsTraversal())
console.log('BG DFS: ', bg.findCycles())

// let obj1 = {
//   a: 1,
//   b: 2
// }

// let obj2 = {
//   a: 5,
//   b: 2,
//   c: 3
// }

// //console.log({...obj1, ...obj2})
// console.log({...obj2, ...obj1})
