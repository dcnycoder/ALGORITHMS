//https://www.lintcode.com/problem/partition-list/description

class LLNode {
  constructor(value, next) {
    this.value = value? value : 0
    this.next = next? next : null
  }
}

class LinkedList {
  constructor(arr) {
    arr.forEach(elem => {
      const newNode = new LLNode(elem)
      if (!this.head) {
        this.head = this.tail = newNode
      }
      else {
        this.tail.next = newNode
        this.tail = this.tail.next
      }
    })
  }
}

console.log(new LinkedList([1,2,3,4,5]))