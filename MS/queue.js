class Node {
  constructor(val, next) {
    this.val = (val)? val : null
    this.next = (next)? next : null
  }
}

class Queue {
  constructor(val) {
    this.head = this.tail = new Node(val)
  }
  enqueue(val) {
    if (val) {
      const newNode = new Node(val)
      if (!this.head) this.head = this.tail = newNode
      else {
        this.tail.next = newNode
        this.tail = this.tail.next
      }
    }
    return this
  }
  dequeue() {
    if (this.head) {
      const result = this.head
      if (this.head.next === null) this.head = this.tail = null
      else this.head = this.head.next
      console.log(result)
      return result
    }
    else {
      console.log(null)
      return null
    }
    
  }
}

let q = new Queue(1)
q.enqueue(2)//.enqueue(3)
console.log("q built: ", q)
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
q.enqueue(1)
q.enqueue(100)

console.log(q)
