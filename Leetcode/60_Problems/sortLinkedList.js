//https://leetcode.com/problems/sort-list/
//Given the head of a linked list, return the list after sorting it in ascending order
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let LL = new ListNode(10)
LL.next = new ListNode(1)
LL.next.next = new ListNode(5)
// LL.next.next.next = new ListNode(1)
// LL.next.next.next.next = new ListNode(5)

var sortList = function(head) {
    let minNode = head
    let slowPointer = head
    let fastPointer
    let oldMinNode
    let result = new ListNode()
    let resPointer = result
    while (slowPointer) {
        fastPointer = slowPointer.next
        while (fastPointer) {
            if (fastPointer.val < minNode.val) {
                minNode = fastPointer
            }
            fastPointer = fastPointer.next //sets the current.next to next
        }

        let oldSlowPointer = slowPointer
        oldMinNode = minNode
        slowPointer = minNode
        slowPointer.next = oldSlowPointer.next
        minNode = oldSlowPointer
        minNode.next = oldMinNode.next //sets to swapped value's next
        // console.log("head: ", head)
        // console.log("current: ", current)

        resPointer.next = slowPointer
        resPointer = resPointer.next

        slowPointer = slowPointer.next
    }
    return result.next
}

console.log(sortList(LL))