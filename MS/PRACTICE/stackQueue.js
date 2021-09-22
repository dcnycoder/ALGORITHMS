class Node {
  constructor(val, next=null) {
    this.val = (val)? val : null
    this.next = next
  }
}

class Stack {
  constructor() {
    this.head = this.tail = null
  }
  push (val) {
    const newNode = new Node(val)
  }
}