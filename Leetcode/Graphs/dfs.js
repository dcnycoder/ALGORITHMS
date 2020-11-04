//SOLUTION APPROACH: 
//1) Push 1st node into stack
//2) Pop the node from stack, adding its neighbors to stack
//2) Repeat until the stack is exhausted.

const graph = {
  "A": ["B", "C", "D"],
  "B": ["D", "E"],
  "C": [],
  "D": ["F"],
  "E": [],
  "F": []
}
function dfs(graph, node, visited = {}, result = []) {
  if (!(node in visited)) result.push(node)
  visited[node] = true
    graph[node].forEach((neighbor) => {
      result = dfs(graph, neighbor, visited, result)
    })
  return result
}

console.log("DFS: ", dfs(graph, "A"))