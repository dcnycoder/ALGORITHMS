let graph = {
  'A': ['B'],
  'B': ['D'],
  'C': [],
  'D': ['E', 'A'],
  'E': [],
  'F': []
}

function routeBetweenNodes(graph, startNode, endNode, visited=[], result=false) {
  console.log("current node: ", startNode)
  if (!(startNode in graph) && !(endNode in graph)) return false
  else if (result) return result
  else if (graph[startNode].length) {
    const children = graph[startNode]
    for (let i=0; i<children.length; i++) {
      child = children[i]
      if (child === endNode) return true
      else{
        if (!visited.includes(child)) {
          visited.push(child)
          result = routeBetweenNodes(graph, child, endNode, visited, result)
        }
      }
    } //end of the loop
    return result
  }
}

console.log(routeBetweenNodes(graph, "A", "F"))