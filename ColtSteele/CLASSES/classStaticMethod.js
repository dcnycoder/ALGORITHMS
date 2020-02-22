class Point(x, y) {
  constructor() {
    this.x = x;
    this.y = y;
  }
  showCoordinates() {
    console.log(`This points coordinates are ${this.x, this.y}`);
  }
  //calculates the distance between two points. a class method, not an instance.
  //hyport calculates the hypotenuse lenght of the triangle originating at point (0,0) and sides spanning to x and y.
  static distance(A, B) {
    const dx = A.x - B.x;
    const dy = A.y - B.y;
    return Math.hypot(dx, dy);
  }
}

const A = new Point(3, 5);
const B = new Point(10, 12);

console.log(`The distance between A and B is ${Point.distance(A, B)}`)
