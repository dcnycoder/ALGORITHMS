class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class linkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  add(val) {
    const node = new Node(val)
    if (!this.head) this.head = this.tail = node
    else {
      this.tail.next = node
      this.tail = node
    }
    this.length += 1
    return this
  }
  remove(val) {
    let node = this.head
    if (node.value === val) {
      this.head = node.next
    }
    else {
      let previous = node
      while (node != null) {
        if (node.value === val) {
          if (node === this.tail) {
            this.tail = previous
            previous.next = null
          }
          else previous.next = node.next
          //break
          node = node.next
        }
        else {
          previous = node
          node = node.next
        }

      }
    }
    this.length -= 1
    return this
  } //end of remove

  reverse() {
    if (!this.head) throw Error("There is nothing to reverse")
    //assign this.head to this.tail and this.tail to this.head

    let elem = this.head
    this.head = this.tail
    this.tail = elem
    let prev = null

    while (elem != null) {
      let next = elem.next
      elem.next = prev
      prev = elem
      elem = next
    }
    return this
  } //end of reverse

} //end of linked list




let list = new linkedList
console.log(list.add(1).add(2).add(3))
console.log('List reverse: ', list.reverse())
