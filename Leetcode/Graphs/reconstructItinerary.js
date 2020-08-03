// Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

// Note:

// If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// All airports are represented by three capital letters (IATA code).
// You may assume all tickets form at least one valid itinerary.
// One must use all the tickets once and only once.
// Example 1:

// Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
// Example 2:

// Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
//              But it is larger in lexical order.

function findItinerary(array, start) {
  let graph = {}
  let itinerary = []
  array.forEach(elem => {
    if (!(elem[0] in graph)) graph[elem[0]] = [elem[1]]
    else {
      graph[elem[0]].push(elem[1])
      if (!(graph[elem[1]])) graph[elem[1]] = []
    }
  })
  //sort the codes in graph:
  for (let code in graph) {
    graph[code] = graph[code].sort()
  }

  function buildItinerary(code) {
    if (!graph[code]) return itinerary //base case
    else {
      itinerary.push()
    }

  }
}

const array = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]

console.log(findItinerary(array))
