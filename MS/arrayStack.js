class arrayStack {
  constructor(arr) {
    console.log('this: ', this)
    if (!arr) this.stack = []
    else this.stack = arr
  }
  push(val) {
    if (val) this.stack.push(val)
    return this.stack
  }
  pop() {
    return this.stack.pop()
  }
}

let stack = new arrayStack([1,2])
console.log(stack.push(5))
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)
