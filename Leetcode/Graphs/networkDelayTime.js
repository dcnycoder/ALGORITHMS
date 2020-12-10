function networkDelayTime(times, N, node) {
  let maxTime = 0
  function buildGraph(times) {
    let graph = {}

    times.forEach(elem => {
      if (!(elem[0] in graph)) {
        graph[elem[0]] = [[elem[1], elem[2]]]
      }
      else {
        graph[elem[0]].push([elem[1], elem[2]])
      }
      if (!(elem[1] in graph)) graph[elem[1]] = []
    })
    console.log("Graph: ", graph)
    return graph
  }

  let graph = buildGraph(times, N, K)

  function djikstra(graph, start) {
    console.log("graph in djikstra: ", graph)
    let queue = [[start, 0]]
    console.log('begin queue: : ', queue)
    let visited = {}

    let distances = {} //{`${start}`: 0}
    distances[start] = [null, 0]
    for (let vertex in graph) {
      if (!(vertex in distances)) {
        distances[vertex] = [null, Infinity]
      }
    }
    console.log("original distances: ", distances)

    while (queue.length) {
      let [vertex, weight] = queue.pop()
      //console.log('vertex/weight: ', vertex, weight)
      //console.log("vertex: ", vertex)

      let neighbors = graph[vertex]
      neighbors.forEach(nb => {
        console.log("nb: ", nb)
        console.log("distances: ", distances)
        if (!(nb[0] in visited)) queue.push(nb)
        if (distances[nb[0]][1] > distances[vertex][1] + nb[1]) {
          distances[nb[0]][0] = vertex
          distances[nb[0]][1] = distances[vertex][1] + nb[1]
        }
      })
      visited[vertex] = true
    }
    return distances
  } // end of djikstra
  buildGraph(times)
  let timesFromStart = djikstra(graph, K)
  console.log("Djikstra: ", timesFromStart)

  //iterate through times, figure out the longest time, and if there is not time equal to infinity, return it. Otherwise return -1
  for (let vertex in timesFromStart) {
    console.log("Vertex and vertex[1]: ", vertex, timesFromStart[vertex][1])
    if (timesFromStart[vertex][1] === Infinity) return -1
    else if (timesFromStart[vertex][1]>maxTime) maxTime = timesFromStart[vertex][1]
  }
  return maxTime
}

//const times = [[2,1,1],[2,3,1],[3,4,8]]
//const times = [[1,2,3],[1,3,1],[3,2,1],[3,4,1]]
//const times = [[1,2,1],[2,3,7],[1,3,4],[2,1,2]]
const times = [[1,2,1],[2,3,7],[1,3,4],[2,1,2]]


const N = 4
const K = 1

console.log(networkDelayTime(times, N, K))
