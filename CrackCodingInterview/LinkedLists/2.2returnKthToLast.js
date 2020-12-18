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

//SOLUTION APPROACH: 
//1) Starting with the head, start the count, create the first pointer and
// move it to the next node
//2) When count reaches n, start trailing pointer from the head
var removeNthFromEnd = function(head, n) {
    let counter = 0
    let fastPointer = head
    let slowPointer
    while (fastPointer != head.tail) {
      if (counter === n) {
        slowPointer = head
      }
      fastPointer = fastPointer.next
      if (slowPointer != undefined) slowPointer = slowPointer.next
      counter += 1
    }
    return slowPointer
}


let arr = [1,2,3,4,5]
let LL = new LinkedList(arr)
console.log("LL: ", LL)
console.log("result: ", removeNthFromEnd(LL.head, 3))
