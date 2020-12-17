//return Kth to last: implement an algorithm to find the Kth to last element in a singly
//linked list

class LLNode {
  constructor(value, next) {
    this.value = (value === undefined? 0 : value)
    this.next = (next === undefined? null : next)
  }
}

class LinkedList {
  constructor(arr) {
    arr.forEach(elem => {
      let newNode = new LLNode(elem)
      if (!this.head) {
        this.head = this.tail = newNode
        this.tail.next = null
      }
      else {
        this.tail.next = newNode
        this.tail = this.tail.next
      }
    })
  }
}

var removeNthFromEnd = function(head, n) {
    
};

let arr = [1,2,3,4,5]
console.log(new LinkedList(arr))
