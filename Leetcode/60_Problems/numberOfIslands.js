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
    let visitedArray = JSON.parse(JSON.stringify(grid)) //deep copy of grid
    console.log("visited array: ", visitedArray)
    console.log("filled Array: ", make2dFilledArray(grid, false))
}

numIslands(grid)
