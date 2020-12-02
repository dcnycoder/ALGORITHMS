type LinkedListType = {
  head: NodeType,
  tail: NodeType,
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
  constructor(public array: number[]) {
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

function removeDuplicates(array: number[]) {
  if (array.length) {
    const LL = new LinkedList(array)
    let nexts: INexts = {}
    let node = LL.head
    while (node) {
      if (!(node.value in nexts)) {
        nexts[node.value] = node
      }

    }


  }
}

console.log(removeDuplicates([1,2,3,4]))


