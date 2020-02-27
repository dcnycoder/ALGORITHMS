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

  pop() {
    let result;
    if (this.length <= 0) result = undefined;
    else if (this.head === this.tail) {
      result = this.head;
      this.head = this.tail = null;
      this.length -= 1;
    }
    else {
      result = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.length -= 1;
    }

    return result;
  }

  printValues() {
    let values = [];
    let elem = this.head;
    while (elem) {
      values.push(elem.value);
      elem = elem.next;
    }
    return values;
  }
}

let list = new doublyLinkedList().push(1).push(2).push(3).push(4);

console.log("List: ", list);
console.log('pop result: ', list.pop());
console.log('list after pop: ', list)
//console.log("This.head.next: ", list.head.next.prev);


