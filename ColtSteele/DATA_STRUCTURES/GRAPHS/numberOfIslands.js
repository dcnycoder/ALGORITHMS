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
  [1,0,1,0,0],
  [0,0,1,0,1]
]

const map1 = [
  [1,0,1],
  [0,1,0],
  [1,0,1]
]

function numberOfIslands(map) {
  let islands = 0
  // let visited = new Array(map.length).fill(new Array(map[0].length).fill(null))
  let visited= [
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]
  function exploreRecursive(row, column) {
    if (column+1 < map[row].length && map[row][column+1] === 1) exploreRecursive(row, column+1)
    if (row+1 < map.length && map[row+1][column]  === 1) exploreRecursive(row+1, column)
    visited[row][column] = true
  }
  for (let row = 0; row<map.length; row++) {
    for (let column = 0; column<map[row].length; column++) {
      //let vertex = map[row][column]
      if (visited[row][column] === null) {
        if (map[row][column] === 1) {
          console.log("Row/column", row, column)
          islands+=1
          exploreRecursive(row, column)
        }
      }
      visited[row][column] = true
    }
  }
  return islands
}

console.log(numberOfIslands(map1))

// let testArray = new Array(4)
// testArray.fill(4)



