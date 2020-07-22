// https://leetcode.com/problems/find-the-town-judge/

// In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.



// Example 1:

// Input: N = 2, trust = [[1,2]]
// Output: 2
// Example 2:

// Input: N = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:

// Input: N = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

function findJudge(N, graph) {
    if (N === 1) return 1 //if the town consists of 1 person, he/she is automatically a judge
    let inOutDegree = {}
    let judge = -1
    for (let i=0; i<graph.length; i++) {
      if (!(graph[i][0] in inOutDegree)) {
        inOutDegree[graph[i][0]] = [0]
        inOutDegree[graph[i][0]][1] = 1
      }
      else {
        inOutDegree[graph[i][0]][1] += 1
      }
      if (!(graph[i][1] in inOutDegree)) {
        inOutDegree[graph[i][1]] = [1]
        inOutDegree[graph[i][1]][1] = 0
      }
      else {
        inOutDegree[graph[i][1]][0] += 1
      }
    }
    //console.log('inOutDegree: ', inOutDegree)
    for (let vertex in inOutDegree) {
      console.log('vertex/graph length: ', vertex, graph.length)
      if (inOutDegree[vertex][0] === N-1 && inOutDegree[vertex][1] === 0) {
        judge = vertex
        break
      }
    }
    return judge
  }

const trust = [[1,2]]
console.log(findJudge(3, trust))
