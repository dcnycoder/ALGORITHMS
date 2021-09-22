class LLnode {
  constructor (val, next) {
    this.val = (val)? val : null
    this.next = (next)? next : null
  }
}

class LinkedList {
  constructor(node) {
    this.head = this.tail = (node)? new LLnode(node) : null
  }
  push(val) {
    if (val) {
      let newNode = new LLnode(val)
      if (!this.head) this.head = this.tail = newNode
      else {
        let oldHead = this.head
        this.head = newNode
        this.head.next = oldHead
      }
    }
  }
  pop() {
    if (this.head) {
      let poppedNode = this.head
      this.head = this.head.next
      return poppedNode
    }
    else return null
  }
}

class Stack {
  constructor(val) {
    this.stack = new LinkedList(val)
  }
  push(val) {
    this.stack.push(val)
    return this.stack
  }
  pop() {
    return this.stack.pop()
  }
}

let stack = new Stack(1)
stack.push(2)
console.log("stack: ", stack)
console.log('stack.pop: ', stack.pop())
console.log('stack.pop: ', stack.pop())
console.log('stack.pop: ', stack.pop())
stack.push(10)
console.log("stack: ", stack)