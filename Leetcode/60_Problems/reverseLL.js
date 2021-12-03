class Node {
  constructor(val, next) {
    this.val = (val)? val : 0
    this.next = (next)? next : null
  }
}

function reverseLL(head) {
  let currentNode = head
  let oldPrev = null

  while (currentNode.val) {
    let oldNext = currentNode.next
    currentNode.next = oldPrev
    oldPrev = currentNode
    currentNode = oldNext
  }
}

