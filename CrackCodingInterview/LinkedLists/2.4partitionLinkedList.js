//https://www.lintcode.com/problem/partition-list/description
// Description
// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

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
//SOLUTION APPROACH: 
//1) I should keep the pointer to the last smaller element and append
//   the new elements and its next
//2) Greater elements will just stay in place
function partitionLinkedList(LL, num) {
  let prevPointer = LL.head
  let smallerBorder = prevPointer.value < num? LL.head : undefined
  while (prevPointer.next != null) {
    if (prevPointer.next.value < num) {
      if (smallerBorder === undefined) { 
        //1) cut out this next node (we need to have the prevNode)
        //2) make it a head
        //3) set the smaller pointer to the head
        //let tempNode = prevPointer.next
        let tempNode = LL.head
        LL.head = prevPointer.next
        LL.head.next = tempNode
        prevPointer.next = prevPointer.next.next
        smallerBorder = LL.head
      }
      else {
        tempNode = smallerBorder.next
        smallerBorder.next = prevPointer.next
        smallerBorder.next.next = tempNode
      }
    }
    //else 
    //1) keep the larger node in place
    //2) move the fastPointer
    prevPointer = prevPointer.next
  }
  return LL
}

console.log(new LinkedList([1,2,3,4,5]))

