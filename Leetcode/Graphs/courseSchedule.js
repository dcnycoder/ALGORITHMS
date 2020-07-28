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

function courseSchedule(numCourses, prerequisites) {
  //make a directed graph from a prerequisites array:
  let graph = {}
  possible = true
  prerequisites.forEach(elem => {
    console.log("elem in forEach: ", elem)
    if (!graph[elem[1]]) graph[elem[1]] = [elem[0]]
    else graph[elem[1]].push(elem[0])
    if (!graph[elem[0]]) graph[elem[0]] = []
  })

  console.log("Graph: ", graph)

  //find out if the graph is a dag by finding loops
  function segmentFindLoop(vertex, visited={}, loop = false) {
    if (vertex in visited) loop = false //base case
    else {
      visited[vertex] = true
      console.log("graph[vertex]: ", graph[vertex])
      graph[vertex].forEach(neighbor =>
        loop = segmentFindLoop(neighbor, visited, loop)
      )
    }
    globalVisited = {...globalVisited, ...visited}
    return loop
  }

  let globalVisited = {}

  //for (let i=0; i<graph.length; i++) {
  for (vertex in graph) {
    if (!(vertex in globalVisited)) {
      let visited = {}
      visited[vertex] = true
      possible = !segmentFindLoop(vertex)
      if (possible === false) return possible
    }
  }
  //if it's a dag return true (the graph is a dag and can be topologically sorted)
  return possible
}

const numCourses = 4
const prerequisites = [[1,0], [0,1]]
const prerequisites2 = [[1,0],[2,0],[0,2],[3,0]]

console.log(courseSchedule(numCourses, prerequisites2))

