//https://leetcode.com/problems/linked-list-cycle/

class Node {
  constructor(val, next) {
    this.val = val? val : 0
    this.next = next? next : null
  }
}

const LL = new Node(1)
const Node2 = new Node(2)

LL.next = Node2
Node2.next = new Node(3)
Node2.next.next = Node2

var hasCycle = function(head) {
  let nodeObject = {}
  let current = head
  while (current != null) {
    if (!(current.val in nodeObject)) nodeObject[current.val] = [current]
    else {
      for (let i=0; i<nodeObject[current.val].length-1; i++) {
        const node = nodeObject[current.val][i]
        if (node === current) return true
      }
      nodeObject[current.val].push(current)
    }
    current = current.next
  }
  return false
}

console.log(linkedListCycle(LL))