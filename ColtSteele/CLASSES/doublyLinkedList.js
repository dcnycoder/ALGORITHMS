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

  reverse() {
    //Make current head a tail:
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prevElem = null;
    let nextElem;
    for (let i=0; i<this.length; i++) {
      //we save the reference to nextElem beause we'll be reassigning it to a previous element to reverse the direction of the list later
      nextElem = node.next;
      //we change the direction by assigning the node.next to the prevElement and node.prev to nextElem.
      node.next = prevElem;
      node.prev = nextElem;
      //then we move the 'sliding window': we assign new node to prevElem, and the node becomes nextElem and we repeat the cycle.
      prevElem = node;
      node = nextElem;
    }
    return this;
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

console.log("List: ", list.printValues());
// console.log('pop result: ', list.pop());
// console.log('list after pop: ', list.printValues())
//console.log("This.head.next: ", list.head.next.prev);
console.log("this list reversed: ", list.reverse().printValues());


