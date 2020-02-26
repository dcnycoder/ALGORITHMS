class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  addNode(value) {
    if (!this.head) {
      this.head = new Node(value);
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
    if (index>this.length) {
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
}

let list = new LinkedList(1);
list.addNode(5);
list.addNode(10);
// list.addNode(5);
// list.addNode(1);
// list.addNode(0)

console.log('list: ', list);
console.log('list after insertion: ', list.insert(3, 2));
// console.log("list after unshift(100)", list.unshift(100));
// console.log("list after unshift(200)", list.unshift(200));
// console.log('list.get(0): ', list.get(1));
// console.log('list.set(0, 500): ', list.set(1, 500));
// console.log('list after 0 set to 500: ', list)
// console.log('list.shift(): ', list.shift());
// console.log('list.shift(): ', list.shift());
// console.log('list after shift(): ', list);
// list.popNode();
// list.popNode();
//console.log('pop result: ', list.popNode());
//console.log('list after pop(): ', list);

