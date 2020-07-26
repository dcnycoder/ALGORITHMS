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

const map3 = [
  [1,0,0],
  [0,0,0],
  [0,0,0]
]

const map2 =
[
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]
]

function numIslands(map) {
  let islands = 0

  function make2dFilledArray(originArray, filler) {
    let filledArray = originArray.map(innerArray => innerArray.slice().map(elem => filler))

    return filledArray
  }

  let visited = make2dFilledArray(map, null)
  function exploreRecursive(row, column) {
    if (visited[row][column] === null) {
    visited[row][column] = true
    if (column-1 >= 0 && map[row][column-1] === "1") exploreRecursive(row, column-1)
    if (column+1 < map[row].length && map[row][column+1] === "1") exploreRecursive(row, column+1)
    if (row-1 >= 0 && map[row-1][column]  === "1") exploreRecursive(row-1, column)
    if (row+1 < map.length && map[row+1][column]  === "1") exploreRecursive(row+1, column)
    }
  } //end of exploreRecursive

  for (let row = 0; row<map.length; row++) {
    for (let column = 0; column<map[row].length; column++) {
      if (visited[row][column] === null) {

        if (map[row][column] ===
          "1") {
          islands+=1
          exploreRecursive(row, column)
        }
      }
      visited[row][column] = true
    }
  }
  return islands
}

console.log(numIslands(map2))




