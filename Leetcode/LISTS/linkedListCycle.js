class LinkedList {
  constructor(val, next) {
    this.val = val? val : 0
    this.next = next? next : null
  }
}

const LL = new LinkedList