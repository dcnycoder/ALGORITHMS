// class Node {
//   constructor() 
// }

const Node = function(val = 0, next = null) {
  this.value = val,
  this.next = next
}

class LinkedList {
  constructor() {
    this.head = this.tail = null
    this.counter = 0
  }
  add(val) {
    const newNode = new Node(val)
    if (!this.head) this.head = this.tail = newNode
    else {
      this.tail.next = newNode
      this.tail = this.tail.next
    }
    this.counter+=1
    return this
  }
}

function LLIntersect(LL1, LL2) {
  intersection = null
  let LL1Nodes = {} 
  let LL2Nodes = {}
  function traverseLL(LL, LLNodes) {
    let node = LL.head
    while (node != null) {
      if (!(node.val in LLNodes)) {
        LLNodes[node.val] = [node]
      }
      else LLNodes[node.val].push(node)
      node = node.next
    }
    return LLNodes
  }
  traverseLL(LL1, LL1Nodes)
  traverseLL(LL2, LL2Nodes)
  console.log("LL1Nodes, LL2Nodes: ", LL1Nodes, LL2Nodes)
  for (let val in LL1Nodes) {
    if (val in LL2Nodes) {
      for (let i=0; i<LL1Nodes[val].length; i++) {
        if (LL2Nodes[val].includes(LL1Nodes[val][i])) {
          intersection = LL1Nodes[val][i]
          return intersection
        }
      }
    }
  }
  return intersection
}


let LL1 = new LinkedList
LL1.add(1).add(2).add(3)
let LL2 = new LinkedList
LL2.add(5).add(7).add(8).add(9)
console.log("Counters: ", LL1.counter, LL2.counter)
LL2.head.next = LL1.head.next
console.log("LL1, LL2: ", LL1, LL2)
console.log("LLIntersect: ", LLIntersect(LL1, LL2))
