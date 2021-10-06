//remove duplicates from sorted linked list

class Node {
    constructor(val, next) {
        this.val = (val)? val : 0
        this.next = (next)? next : null
     }
}

let LL = new Node(1)
LL.next = new Node(1)
LL.next.next = new Node(2)
LL.next.next.next = new Node(2)
LL.next.next.next.next = new Node(2)
LL.next.next.next.next.next = new Node(3)
LL.next.next.next.next.next.next = new Node(5)

const removeDuplicatesFromSortedLL = (head) => {
    let slowPointer = head
    let fastPointer
    while (slowPointer) {
        //while (slowPointer.next) {
            fastPointer = slowPointer.next
            while (fastPointer && (fastPointer.val === slowPointer.val)) fastPointer = fastPointer.next//slowPointer.next = fastPointer 
        //}
        slowPointer.next = fastPointer
        slowPointer = slowPointer.next
    }
    return head
}


console.log(removeDuplicatesFromSortedLL(LL))