type LinkedListType = {
  head: NodeType,
  tail: NodeType,
}

type NodeType = {
  value: number,
  next: NodeType | null
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
    return LL
  }
}

console.log(removeDuplicates([1,2,3,4]))


