// https://leetcode.com/problems/course-schedule/
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?



// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
//              To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.

function canFinish(numCourses, prerequisites) {
  //make a directed graph from a prerequisites array:
  let graph = {}
  let possible = true
  let visited = {}

  prerequisites.forEach(elem => {
    if (!graph[elem[1]]) graph[elem[1]] = [elem[0]]
    else graph[elem[1]].push(elem[0])
    if (!graph[elem[0]]) graph[elem[0]] = []
  })

  //find out if the graph is a dag by finding loops
  function segmentFindLoop(vertex, loop = false) {
    if (!(visited[vertex] === 2)) {
      if (visited[vertex] === 1) loop = true //base case
      else {
        visited[vertex] = 1
        graph[vertex].forEach(neighbor =>
          loop = segmentFindLoop(neighbor, loop)
        )
      }
    }
    visited[vertex] = 2
    return loop
  }

  for (vertex in graph) {
      if (!(visited[vertex] === 2)) {

      possible = !segmentFindLoop(vertex)
      if (possible === false) return possible
    }
  }
  //if it's a dag return true (the graph is a dag and can be topologically sorted)
  return possible
}

const numCourses = 4
const prerequisites = [[1,0], [2,1], [1,2], [3,0]]
const prerequisites2 = [[1,0],[2,0],[3,0]]
const prerequisites3 = [[0,1],[0,2],[1,2]]


console.log(canFinish(numCourses, prerequisites3))

