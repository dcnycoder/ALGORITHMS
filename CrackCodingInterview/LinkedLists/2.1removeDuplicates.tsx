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
  constructor(array: number[]) {
    if (array.length) {
      this.head.value = array[0]
      array.forEach(elem => {
        if(!this.head) {
          this.head.value = elem
          this.tail = null
        }
      })
      for (let i =0; i<array.length; i++) {
        
      }
    }
  }
}

function removeDuplicates(linkedList) {

}

const LL = new LinkedList([1,2,3,4,5,6])

