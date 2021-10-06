//https://leetcode.com/problems/sort-list/
//Given the head of a linked list, return the list after sorting it in ascending order
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let LL = new ListNode(10)
LL.next = new ListNode(9)
LL.next.next = new ListNode(8)
LL.next.next.next = new ListNode(1)
LL.next.next.next.next = new ListNode(5)

var sortList = function(head) {
    let minNode = head
    let slowPointer = head
    let fastPointer
    let current = head
    let oldCurrent
    let oldMinNode
    let result = new ListNode()
    let resPointer = result
    while (slowPointer) {
        while (slowPointer.next) {
            fastPointer = slowPointer.next
            if (current.next.val < minNode.val) {
                minNode = current.next
            }
            slowPointer.next = current.next.next //sets the current.next to next
        }

        oldCurrent = current
        oldMinNode = minNode
        current = minNode
        current.next = oldCurrent.next
        minNode = oldCurrent
        minNode.next = oldMinNode.next
        // console.log("head: ", head)
        // console.log("current: ", current)

        resPointer.next = current
        resPointer = resPointer.next

        current = current.next
    }
    return result.next
}

console.log(sortList(LL))