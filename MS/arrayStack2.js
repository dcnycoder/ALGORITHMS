class arrayStack2 {
  constructor(val) {
    this.stack = (val)? [val] : []
  }
  push(val) {
    if (val) {
      this.stack.push(val)
      return this
    }
  }
  pop() {
    let result = this.stack.pop()
    console.log(result)
    return result
  }
} 

let q = new arrayStack2(1)
q.push(2).push(3)
q.pop()
q.pop()
q.pop()
q.pop()
q.pop()

console.log("Queue: ", q)