https://leetcode.com/problems/number-of-islands/

// Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

function numIslands(arr) {
  let islands = 0
  function islandDFS(i, j) {
    if (arr[i][j] === "0") return 
    else {
      visited[i][j] = true
      let neighbors = []
      if (i+1<arr.length) neighbors.push([i+1, j])
      if (i-1>=0) neighbors.push([i-1, j])
      if (j+1<arr[i].length) neighbors.push([i, j+1])
      if (j-1>=0) neighbors.push([i, j-1])
      neighbors.forEach(neighbor => {
        if (visited[neighbor[0]][neighbor[1]] === false) islandDFS(neighbor[0], neighbor[1])
      })
    }
  }
  function array2DFiller(rows, cols, filler) {
    let filledArray = []
    for (let i=0; i<rows; i++) {
      let row = []
      for (let j=0; j<cols; j++) {
        row.push(filler)
      }
      filledArray.push(row);
    }
    return filledArray;
  }

  let visited = array2DFiller(arr.length, arr[0].length, false)

  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
      if (visited[i][j] === false) {
        visited[i][j] === true
        if (arr[i][j] === "1") {
          islands += 1
          islandDFS(i, j)
        }
      }
    }
  }
  return islands
}