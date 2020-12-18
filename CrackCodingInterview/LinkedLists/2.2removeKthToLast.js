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
var removeNthFromEnd = function(LL, n) {
    let counter = 0
    let fastPointer = LL.head
    let prevToKth
    while (fastPointer != null) {
      counter += 1
      if (counter === n) {
        prevToKth = LL.head
      }
        fastPointer = fastPointer.next
        //if ((prevToKth != undefined) && (fastPointer!=null)) prevToKth = prevToKth.next

    }

    if (prevToKth != undefined) prevToKth.value = 3
    //if (prevToKth != undefined) prevToKth = temp


    return LL
}

function changeTail(LL) {
  let pointer = LL.tail
  pointer.value = 200
  console.log("changed LL in the func: ", LL)
  return LL
}
let arr = [1,2,3,4,5]
let arr1 = [1]
let LL = new LinkedList(arr1)

// console.log("LL before: ", LL)

// changeTail(LL)
// console.log("LL after: ", LL)

console.log("LL: ", LL)
console.log("result: ", removeNthFromEnd(LL, 1))