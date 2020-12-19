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
  let smallerPointer
  let fastPointer = LL.head
  while (fastPointer.next != null) {
    if (fastPointer.value < num) {
      if (smallerPointer === undefined) { 
        //1) cut out this node (we need to have the prevNode, so maybe operate with fastPointer.next?)
        //2) make it a head
        //3) set the smaller pointer to the head

      }
      else {

      }
    }
    else 
    //1) keep the larger node in place
    //2) move the fastPointer
    {
      
    }
  }
}

console.log(new LinkedList([1,2,3,4,5]))

