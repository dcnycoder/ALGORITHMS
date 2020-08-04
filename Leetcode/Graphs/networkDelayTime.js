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
      // let object = {...elem[1]}
      // object[elem[1]] = elem[2]
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

  function calculateDelay(node, delay=0, visited = {'nodes':0}) {
    for (let i=0; i<graph[node].length; i++) {
      let neighbor = graph[node][i][0]
      delay+=1
      visited['nodes']+=1
      delay=calculateDelay(neighbor, delay, visited)
    }
    return delay
  }

  // if (calculateDelay(node) < N) {
  //   return -1
  // }
  // else return calculateDelay(node)
  return calculateDelay(node)

}

const times = [[2,1,1],[2,3,1],[3,4,1]]
const N = 4
const K = 2

console.log(networkDelayTime(times, N, K))
