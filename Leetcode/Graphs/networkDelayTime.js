function networkDelayTime(times, N, node) {
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
        if (distances[nb[0]][1] > distances[vertex][1] + weight) {
          distances[nb[0]][0] = vertex
          distances[nb[0]][1] = distances[vertex][1] + nb[1]
        }
      })
      visited[vertex] = true
    }
    //return distances
  } // end of djikstra
  buildGraph(times)
  let times = djikstra(graph, node)
  console.log("Djikstra: ", times)

  //iterate through times, figure out the longest time, and if there is not time equal to infinity, return it. Otherwise return -1
  for (let vertex in times) {
    let max
    if ()
  }
}

//const times = [[2,1,1],[2,3,1],[3,4,8]]
const times = [[1,2,3],[1,3,1],[3,2,1],[3,4,1]]
const N = 4
const K = 1

console.log(networkDelayTime(times, N, K))
