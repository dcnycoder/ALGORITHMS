class LL {
  constructor(val, next) {
    this.val = (val)? val : null
    this.next = null
  }
}

let LL1 = new LL(1)
LL1.next = new LL(2)
LL1.next.next = new LL(3)

function sortLinkedList(head) {
  if (head === null || head.next === null) return head
  let slow = head
  let fast = head.next
  while (slow != null) {
    
  }
}