// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
// Input:
// 11110
// 11010
// 11000
// 00000
// Output: 1

const map = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,1,0,1]
]

function numberOfIslands(map) {
  let islands = 0
  let visited = new Array(map.length).fill(new Array(map[0].length).fill(null))
  function exploreRecursive(vertex) {
    let neighbors = []
    if ()
  }
  for (let row = 0; row<map.length; row++) {
    for (let column = 0; column<row.length; i++) {
      let vertex = map[row][column]
      if (!visited.includes(vertex)) {
        islands+=1
        exploreRecursive(vertex)
      }
      visited[row][column] = true
    }
  }
}

console.log(numberOfIslands(map))

let testArray = new Array(4)
testArray.fill(4)
//console.log(testArray)



