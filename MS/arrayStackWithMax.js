class Stack {
  constructor() {
    this.stack = []
    this.max = []
  }
  push(val) {
    this.stack.push(val)
    if (!this.max.length || val > this.max[this.max.length-1]) this.max.push(val)
    else this.max.push(this.max[this.max.length-1])
    return this
  }
  pop() {
    if (this.stack.length) {
      this.stack.pop()
      this.max.pop()
    }
    return this
  }
  getMax() {
    return this.max[this.max.length-1]
  }
}

let myStack = new Stack
myStack.push(2).push(3).push(14).push(1)
myStack.pop().pop()

console.log(myStack.getMax())
