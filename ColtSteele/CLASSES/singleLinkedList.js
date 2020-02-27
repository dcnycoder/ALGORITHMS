class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }
  addNode(value) {
    if (!this.head) {
      this.head = this.tail = new Node(value);
      this.length += 1;
    }
    else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
      this.length+=1;
    }
    return this;
  }
  popNode() {
    let result = undefined;
    if (!this.head) return result;
    else if (this.head === this.tail) {
      this.head = this.tail = null;
      this.length = 0;
      return this.head
    }
    else {
      let current = this.head;
      while (current.next != this.tail) {
        current = current.next;
      }
      result = current.next;
      this.tail = current;
      current.next = null;
      this.length -= 1;
      return result;
    }
  }
  shift() {
    let result = undefined;
    if (!this.head) return;
    else if (this.head === this.tail) {
      result = this.head;
      this.head = this.tail = null;
      this.length = 0;
    }
    else {
      result = this.head;
      this.head = this.head.next;
      this.length -= 1;
    }
    return result;
  }
  unshift(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    }
    else {
      node.next = this.head;
      this.length += 1;
      this.head = node;
    }
    return this;
  }
  get(index) {
    if (index>this.length || index<0) {
      console.log("The index wasn't found!");
      return undefined;
    }
    else {
      let elem = this.head;
      for (let i=1; i<=index; i++) {
        elem = elem.next;
      }
      return elem;
    }
  }
  set(index, value) {
    let elem = this.get(index);
    elem.value = value;
    return elem;
  }
  insert(index, value) {
    if (index === 0) this.unshift(value);
    else if (index >= this.length-1) this.addNode(value);
    else {
      let prevNode = this.get(index-1);
      let nextNode = this.get(index+1);
      let insertedNode = new Node(value);
      prevNode.next = insertedNode;
      insertedNode.next = nextNode;
      this.length += 1;
    }
    return this;
  }
  remove(index) {
    if (index >= this.length || index < 0) return;
    else if (index === 0) {
      this.shift();
    }
    else if (index === this.length-1) {
      this.popNode()
    }
    else {
      let prevNode = this.get(index-1);
      let nextNode = this.get(index+1);
      prevNode.next =  nextNode;
      this.length -= 1;
    }
    return this;
  }
  reverse() {
    let prevElem = null;
    let nextElem;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    for (let i=0; i<this.length; i++) {
      //we start working with the current node, that is the former HEAD;
      nextElem = node.next; //to save ref to next elem after HEAD before we change it
      node.next = prevElem; //we set the current node next to the previous elem, which is the new tail (OLD HEAD) in the beginning of this loop;
      prevElem = node; // we change the previous element to be this node for future reference;
      node = nextElem; // we switch to the next node to repeat the cycle again
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

let list = new LinkedList().addNode(1).addNode(5).addNode(10);
// console.log('pop 10: ', list.popNode());
console.log('list: ', list.printValues());
let reversedList = list.reverse();
console.log('Reversed list: ', reversedList.printValues());

