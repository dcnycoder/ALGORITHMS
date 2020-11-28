type LinkedListType = {
  head: {},
  tail: {}
}
type NodeType = {
  value: number,
  next: NodeType
}


class LinkedList {
  public head: NodeType
  public tail: NodeType
  constructor(array: number[]) {
    if (!array) this.head = this.tail = null
    array.forEach(elem => {

    })
  }
}

function removeDuplicates(linkedList) {

}

const LL = new LinkedList([1,2,3,4,5,6])