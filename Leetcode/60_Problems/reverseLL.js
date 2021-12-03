class Node {
  constructor(val, next) {
    this.val = (val)? val : 0
    this.next = (next)? next : null
  }
}

function reverseLL(head) {
  let currentNode = head
  let oldPrev = null

  while (currentNode) {
    let oldNext = currentNode.next
    currentNode.next = oldPrev
    oldPrev = currentNode
    //if (oldNext === null) return currentNode
    //else 
    currentNode = oldNext
  }
  return currentNode
}

const LL = new Node(1)
LL.next = new Node(2)
LL.next.next = new Node(3)
console.log("LL: ", LL)
console.log("Reversed LL: ", reverseLL(LL))