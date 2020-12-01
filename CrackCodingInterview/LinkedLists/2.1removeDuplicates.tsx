// type LinkedListType = {
//   head: {} | null,
//   tail: {} | null
// }
type LinkedListType = {
  head: NodeType,
  tail: NodeType,
}

type NodeType = {
  value: number,
  next: NodeType | null
}

class LinkedList {
  head: NodeType = {value: 0, next: null}
  tail: NodeType | null = null
  constructor(public array: number[]) {
      array.forEach(elem => {
        if(!this.head.value) {
          this.head.value = elem
          this.tail = null
        }
      })

  }
}

function removeDuplicates(linkedList: number[]) {
  if (linkedList.length) {
    const LL = new LinkedList([1,2,3,4,5,6])
  }
}



