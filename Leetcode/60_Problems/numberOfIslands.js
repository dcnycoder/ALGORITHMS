// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */


const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

function make2dFilledArray(array, filler) {
  const filledArray = array.map(innerArray => 
    innerArray.slice().map(elem => filler)
  )
  return filledArray
}

var numIslands = function(grid) {
  let visited = make2dFilledArray(grid, false)
  let counter = 0

  function exploreIsland(row, col) {
    //traverse the island in cross pattern:
    visited[row][col] = true
    if (row-1 >= 0 && !visited[row-1][col]) { //up
      if (grid[row-1][col] === "1") exploreIsland(row-1, col)
      visited[row-1][col] = true
    }
    if (row+1 <= grid.length && !visited[row+1][col]) { //down
      if (grid[row+1][col] === "1") exploreIsland(row+1, col)
      visited[row+1][col] = true
    }
    if (col-1 >= 0 && !visited[row][col-1]) { //left
      if (grid[row][col-1] === "1") exploreIsland(row, col-1)
      visited[row][col-1] = true
    }
    if (col+1 <= grid[0].length && !visited[row][col+1]) { //right
      if (grid[row][col+1] === "1") exploreIsland(row, col+1)
      visited[row][col+1] = true
    }
  } // end of exploreIsland

    for (let row = 0; row<grid.length; row++) {
      for (let col = 0; col<grid[row].length; col++) {

        if ((grid[row][col]) === '1' && !visited[row][col]) {
          visited[row][col] = true
          exploreIsland(row, col)
          counter += 1
        }
        else visited[row][col] = true
      }
    }
    return counter
}

console.log(numIslands(grid))
