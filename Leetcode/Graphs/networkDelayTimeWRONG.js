//https://leetcode.com/problems/network-delay-time/description/
// There are N network nodes, labelled 1 to N.

// Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

// Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? If it is impossible, return -1.

// Example 1:

// Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
// Output: 2

function networkDelayTime(times, N, node) {
  function buildGraph(times) {
    let graph = {}
    times.forEach(elem => {
      if (!(elem[0] in graph)) {
        graph[elem[0]] = [[elem[1], elem[2]]]
        if (!(elem[1] in graph)) graph[elem[1]] = []
      }
      else {
        graph[elem[0]].push([elem[1], elem[2]])
      }
    })
    console.log("Graph: ", graph)
    return graph
  }
  let graph = buildGraph(times, N, K)



  function exploreBranch(node, delay) {
    console.log("node: ", node)
    console.log("graph[node]: ", graph[node])
    if ((node in visited) || (graph[node].length === 0)) { //base case
      return delay
    }
    else {
      delay+=node[1]
      visited_nodes+=1
      visited[node] = true
      for (let i=0; i<graph[node].length; i++) {
        let neighbor = graph[node][0][0]
        console.log("neigh: ", neighbor)
        delay+=exploreBranch(neighbor, delay)
      }
      return delay
    }
  }

  let max = 0
  let delay = 0
  let visited = {}
  let visited_nodes = 0

  for (let i=0; i<graph[node].length; i++) {
    if (delay>max) max = delay
    let neighbor = graph[node][i][0]
    delay = graph[node][i][1]
    // if (graph[node].length>0) {
    //   let neighbor = graph[node][0][0]
    console.log("neighbor: ", neighbor)
    //let neighbor = graph[node][0]
    delay = exploreBranch(neighbor, delay)
    //}
  }

  return max

} //end of networkDelayTime func

const times = [[2,1,1],[2,3,1],[3,4,8]]
const N = 4
const K = 2

console.log(networkDelayTime(times, N, K))
