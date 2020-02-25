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
}

let list = new LinkedList(25);
list.addNode(15);
list.addNode(10);
// list.addNode(5);
// list.addNode(1);
// list.addNode(0)

console.log('list: ', list);
list.popNode();
list.popNode();
list.popNode();
list.popNode();
//console.log('pop result: ', list.popNode());
console.log('list after pop(): ', list);

