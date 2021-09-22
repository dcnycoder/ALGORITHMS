class Node {
  constructor (val, next) {
    this.val = (val)? val : null
    this.next = (next)? next : null
  }
}

class stack2 {
  constructor() {
    this.head = this.tail = null
  }
  push(val) {
    const newNode = new Node(val)
    if (!this.head) this.head = this.tail = newNode
    else {
      const oldHead = this.head
      this.head = newNode
      this.head.next = oldHead
    }
    return this
  }
  pop() {
    if (this.head) {
      let popped = this.head
      if (this.head === this.tail) this.head = this.tail = null
      return popped
    }
  }
}

let myStack = new stack2
myStack.push(1).push(2).push(3)

console.log(myStack)