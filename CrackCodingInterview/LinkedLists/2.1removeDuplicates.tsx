type LinkedListType = {
  head: NodeType,
  tail: NodeType | null,
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
  head: NodeType = {value: 0, next: null}
  tail: NodeType | null = null
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
        nexts[node.value].next = nexts[node.value].next.next
      }
      node = node.next
    }
    //console.log("nexts: ", nexts)
    return LL
  }
}

function linkedListToArray(linkedList: LinkedListType) {
  let node: NodeType | null = linkedList.head
  let result: number[] = []
  while (node) {
    result.push(node.value)
    node = node.next
  }
  return result
}

const array = [1,1,2,2,2,2,3,4, 4, 5, 6,7,1]
let noDuplicatesLL = removeDuplicates(array)
console.log("Result: ", noDuplicatesLL)
console.log("LL without duplicates: ", linkedListToArray(noDuplicatesLL))


