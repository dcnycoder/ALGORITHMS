https://leetcode.com/problems/number-of-islands/

function numberOfIslands(arr) {
  let islands = 0
  function islandDFS(i, j, visited) {
    if (arr[i][j] === undefined) return
    else {
      visited[i][j] = true
      const neighbors = [[i-1, j], [i+1, j], [j-1, i], [j+1, i]]
      neighbors.forEach(neighbor => islandDFS())
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
    console.log(filledArray);
    return filledArray;
  }

  let visited = array2DFiller(arr.length, arr[0].length, false)

  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
      if (visited[i][j] === false) {
        visited[i][j] === true
        if (arr[i][j] === 1) {
          islands += 1
          islandDFS(i, j)
        }
      }
    }
  }
  return islands
}

let arr = [
  [1,0,1,0],
  [1,0,1,0],
  [1,0,1,0],
  [1,0,1,0],
]
numberOfIslands(arr)