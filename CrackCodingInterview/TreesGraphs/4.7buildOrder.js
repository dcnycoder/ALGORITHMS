//Build order: you are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is dependent on the first project). All of project's dependencies must be build before the project is. Find a build order that will allow the projects to be build. If there is no valid build order, return an error.
//https://leetcode.com/problems/course-schedule-ii/

// 210. Course Schedule II
// Medium

// There are a total of n courses you have to take labelled from 0 to n - 1.

// Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.

// Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.

// If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

 //Solution approach:
 //1) Build a graph out of prerequisites
 //2) Build an in-degree list of graph nodes
 //3) Create a stack of 0-indegree nodes.
 //4) Pop the first 0-indegree node off the stack
 //5) Reduce indegree of every node which had an inbound connection from the node just removed
 //6) Push to 0-indegree stack the nodes whose indegree just became 0
 //7) Repeat until the stack is empty

var findOrder = function(numCourses, prerequisites) {
  function buildGraph(numCourses, prerequisites) {
    let graph = {}
    for (let i=0; i<numCourses; i++) {
      graph[i] = []
     }
    console.log('Graph built: ', graph)

    prerequisites.forEach(pair => {
      graph[pair[1]].push(pair[0])
    })
    return graph
  }
  function buildInDegree(graph) {
    let inDegree = {}
    for (let node in graph) {
        if (!inDegree[node]) inDegree[node] = 0
        graph[node].forEach(node => {
          if (!(node in inDegree)) inDegree[node] = 1
          else inDegree[node]+=1
        })
    }
    return inDegree
  }
  function buildZeroIndegreeStack(inDegree) {
    let stack = []
    for (let node in inDegree) {
      if (inDegree[node] === 0) {
        stack.push(parseInt(node))
      }
    }
    return stack
  }


  let graph = buildGraph(numCourses, prerequisites)
  let inDegree = buildInDegree(graph)
  let stack = buildZeroIndegreeStack(inDegree)
  let order = []

  if (!prerequisites.length) {
    for (let i=0; i<numCourses; i++) {
      order.push(i)
    }
  }
  else {
    while (stack.length) {
      const elem = stack.pop()
      order.push(elem)
      graph[elem].forEach(node => {
        inDegree[node] -= 1
        if (inDegree[node] === 0) stack.push(node)
      })
    }
  }

  if (order.length === numCourses) return order
  else return []
}

const numCourses = 4
const prerequisites = [[1,0],[2,0],[3,1],[3,2]]
console.log(findOrder(4, prerequisites))
