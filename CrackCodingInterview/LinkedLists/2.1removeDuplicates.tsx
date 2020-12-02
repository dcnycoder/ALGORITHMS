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
    //console.log("LL: ", LL)
    let nexts: INexts = {}
    let node: NodeType | null = LL.head
    while (node) {
      if (!(node.value in nexts)) {
        nexts[node.value] = node
      }
      else {
        nexts[node.value] = nexts[node.value].next
        nexts[node.value] = node
      }
      node = node.next
    }
    //console.log("nexts: ", nexts)
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

const array = [1,2,3,1,1]
let noDuplicatesLL = removeDuplicates(array)
console.log("Result: ", noDuplicatesLL)
console.log("LL without duplicates: ", linkedListToArray(noDuplicatesLL))


