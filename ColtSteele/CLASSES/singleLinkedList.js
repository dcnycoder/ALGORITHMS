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
    if (this.length === 1) {
      this.head = this.tail = null;
    }
    //the last node is at length-1 position:
    else {
      let elem = this.head;
      for (let i = 1; i<this.length-1; i++) {
        console.log(`${i} elem: ${elem.value}`)
        elem = elem.next;
      }
      elem.next = null;
      this.tail = elem;
      this.length -= 1;
    }
    return this;
  }
}

let list = new LinkedList(25);
list.addNode(15);
list.addNode(10);
list.addNode(5);
list.addNode(1);

console.dir('list: ', list);
list.popNode();
console.log('list after pop(): ', list);

