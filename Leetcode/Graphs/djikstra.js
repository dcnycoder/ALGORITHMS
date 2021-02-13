let flights = {
  "A": [{"B": 100}, {"D": 160}],
  "B": [{"C": 120}, {"D": 180}],
  "C": [{"E": 80}],
  "D": [{"E": 140}],
  "E": [{"B": 100}]
}

let flights = {
  "A": {"B": 100, "D": 160},
  "B": {"C": 120, "D": 180},
  "C": {"E": 80},
  "D": {"E": 140},
  "E": {"B": 100}
}

function djikstra(start, end, flights) {
  let distances = {}
  visited = []
  for (let flight in flights) distances[flight] = Infinity
  distances[start] = 0
  stack = start
  let city = stack.pop()
  visited.push(city)
  // Calculate the distances to neighbors and compare to
  // current distances
  for (let neighbor in flights[city]) {
    if (flights[city][neighbor] + distances[city] < distances[neighbor])
    distances[neighbor] = flights[city][neighbor] + distances[city]
    if (!(neighbor in visited)) stack.push(neighbor)
    //sort stack:
    stack = stack.sort((a, b) => distances[a] - distances[b])
    console.log(stack)
  }

}

console.log(djikstra("A", "E", flights))