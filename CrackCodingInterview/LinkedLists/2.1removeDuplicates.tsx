type LinkedListType = {
  head: NodeType,
  tail: NodeType
}
type NodeType = {
  value: number,
  next: NodeType | null
}
//note synthax for an unknown number of properties
interface INexts {
  [key: number]: NodeType
}

class LLNode implements NodeType {
  constructor(public value: number, public next = null) {
    this.value = value 
    this.next = next
  }
}

class LinkedList {
  head: NodeType = new LLNode(0, null)
  tail: NodeType = this.head
  constructor(array: number[]) {
      array.forEach(elem => {
        if(!this.head.value) {
          this.head.value = elem
          this.tail = this.head
          this.head.next = this.tail
        }
        else {
          this.tail.next = new LLNode(elem)
          this.tail = this.tail.next
        }
      })

  }
}

function removeDuplicates(array: number[]): LinkedListType | undefined {
  if (array.length) {
    const LL = new LinkedList(array)
    let node: NodeType | null = LL.head
    while (node) {
      let pointerToPrevNode = node
      let comparedNode = node.next
      while (comparedNode) {
        if (comparedNode.value === node.value)
          {
            pointerToPrevNode.next = comparedNode.next
          }
        else pointerToPrevNode = pointerToPrevNode.next
        comparedNode = comparedNode.next
      }
      node = node.next
    }
    return LL
  }
}

function linkedListToArray(linkedList: LinkedListType | undefined) {
  let node: NodeType | null = linkedList.head
  let result: number[] = []
  while (node) {
    result.push(node.value)
    node = node.next
  }
  return result
}

const array = [1,5,1,2,5,4,1,2,3,1]
let noDuplicatesLL = removeDuplicates(array)
console.log("Result: ", noDuplicatesLL)
console.log("LL without duplicates: ", linkedListToArray(noDuplicatesLL))


