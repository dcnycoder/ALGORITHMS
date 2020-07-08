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
  addEdgeSorted(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      if (!(vertex2 in this.adjacencyList[vertex1])) this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex1].sort()
      if (!(vertex1 in this.adjacencyList[vertex2])) this.adjacencyList[vertex2].push(vertex1)
      this.adjacencyList[vertex2].sort()
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
    }
    delete this.adjacencyList[vertex]
    return this
  }

  dfs() {
    let result = []
    let visited = {}
    let clock = 0
    for (let vertex in this.adjacencyList) {
 //Begin exploring new segment

      if (!(vertex in visited)) {
        let stack = []
        let segment = {}

        stack.push(vertex)
        while (stack.length) {
          let vertex = stack[stack.length-1]
          if (vertex in visited) {
            clock+=1
            if (segment[vertex].length<2)
            segment[vertex].push(clock)

            stack.pop()
          }
          else { //the vertex hasn't been explored yet
            clock+=1
            segment[vertex] = [clock]
            let neighbors = this.adjacencyList[vertex]
            for (let i = neighbors.length-1; i>=0; i--) {
              const neighbor = neighbors[i]
            // if (!(neighbor in segment) && !(stack.includes(neighbor))) {
            if (!(neighbor in visited)) {
                //clock += 1
                stack.push(neighbor)
              }
            }
            visited[vertex] = true
          }

        } //Exploring the segment done
        result.push(segment)
      }

    }
    return result
  } //end of dfs

  dfsRecursive() {
    let clock = 0
    function segmentDFS(vertex, segment = {}) {
      clock+=1
      //segment.push({vertex: [clock]})
      segment[vertex] = [clock]
      //take care of vertex pre-order:
      let neighbors = this.adjacencyList[vertex]
      for (let i = 0; i<neighbors.length; i++) {
        //clock+=1
        let neighbor = neighbors[i]
        //if (!segment.includes(neighbor)) {
        if (!(neighbor in segment)) {
          segmentDFS(neighbor, segment)
        }
      }
      //take care of vertex post-order
      clock += 1
      segment[vertex].push(clock)
      return segment
    } //end of segment dfs

    let result = []
    let visited = {}

    for (let vertex in this.adjacencyList) {
      console.log('vertex: ', vertex)
      let clock = 0
      if (!(vertex in visited)) {
        let discoveredSegment = segmentDFS(vertex)
        result.push(discoveredSegment)
        visited = {...visited, ...discoveredSegment}
      }
    }
    return result
  }

  segmentDFSIterative(vertex) {
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

const directedGraph = new Graph

directedGraph
class directedGraph() {
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
}
