class Node {
    constructor(val, next) {
        this.val = (val)? val : 0
        this.next = (next)? new Node(next) : null
    }
}
 
let LL1 = new Node(1)
LL1.next = new Node(2)
LL1.next.next = new Node(3)
LL1.next.next.next = new Node(5)

let LL2 = new Node(2)
LL2.next = new Node(4)
LL2.next.next = new Node(6)

console.log("LL1: ", LL1)
console.log("LL2: ", LL2)

function mergeLinkedLists(ll1, ll2) {
    let result = new Node()
    let curr = result

    while (ll1 && ll2) {
        if (ll2.val < ll1.val) {
            curr.next = ll2
            ll2 = ll2.next
        }
        else {
            curr.next = ll1
            ll1 = ll1.next
        }
        curr = curr.next
    }
    if (!ll2) curr.next = ll1
    else curr.next = ll2
    
    return result.next
}

console.log("result: ", mergeLinkedLists(LL1, LL2))