class Node {
  constructor(val, next) {
    this.val = (val)? val : 0;
    this.next = next? next : val;
  }
  // add (val) {
  //   const newNode = new Node(val)

  // }
}

function mergeSortedLL(LL1, LL2) {
  let resultPointer = (LL1.val<LL2.val)? LL1 : LL2
  let pointer1 = LL1
  let pointer2 = LL2
  if (resultPointer === LL1) {
    pointer1 = pointer1.next
  }
  else pointer2 = pointer2.next

  if (pointer1.val < pointer2.val) {
    let prevNext1 = pointer1.next;
    
  }
}

let LL1 = new Node(1)
LL.next = new Node(3)
LL.next.next = new Node(5)

let LL2 = new Node(2)
LL.next = new Node(4)
LL.next.next = new Node(6)

console.log(mergeSortedLL(LL1, LL2));