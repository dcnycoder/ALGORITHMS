// Given four points of a rectangle, and one more point P. Write a function to check whether P lies within the given rectangle or not.

const { prependOnceListener } = require("process")

// Examples:

// Input : R = [(10, 10), (10, -10), 
//              (-10, -10), (-10, 10)]
//         P = (0, 0)
// Output : yes

function pointInRect(rect, point) {
 let ranges = [[], []]
 rect.forEach(elem => {
   if (!(ranges[0].includes(elem[0]))) ranges[0].push(elem[0])
   if (!(ranges[1].includes(elem[1]))) ranges[1].push(elem[1])
 })
 let xMin = Math.min(...ranges[0])
 let xMax = Math.max(...ranges[0])
 let yMin = Math.min(...ranges[1])
 let yMax = Math.max(...ranges[1])
 console.log('ranges: ', ranges)
 console.log('xMin, xMax, yMin, yMax: ', xMin, xMax, yMin, yMax)
 if (point[0]>xMin&&point[0]<xMax && point[1]>yMin&&point[1]<yMax) return true
 else return false
}

const rect = [[10, 15], [10, 5], [20, 15], [20, 5]]
const point = [12,117]

console.log((pointInRect(rect, point)))