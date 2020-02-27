class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    }
    else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
}


