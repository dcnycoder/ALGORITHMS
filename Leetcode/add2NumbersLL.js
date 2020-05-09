//https://leetcode.com/problems/add-two-numbers/

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


class linkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  add(val) {
    const node = new Node(val)
    if (!this.head) this.head = this.tail = node
    else {
      this.tail.next = node
      this.tail = node
    }
    this.length += 1
    return this
  }
  remove(val) {
    let node = this.head
    if (node.value === val) {
      this.head = node.next
    }
    else {
      let previous = node
      while (node != null) {
        if (node.value === val) {
          if (node === this.tail) {
            this.tail = previous
            previous.next = null
          }
          else previous.next = node.next
          //break
          node = node.next
        }
        else {
          previous = node
          node = node.next
        }

      }
    }
    this.length -= 1
    return this
  } //end of remove
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function add2NumbersLL(list1, list2) {
  let sumList = new linkedList
  let carryover = 0
  if (!list1.head || !list2.head) throw Error("List1 and/or list2 is empty!")
  else {
    let node1 = list1.head
    let node2 = list2.head
    while(node1 || node2 || carryover) {
      if (!node1) node1 = {value: 0}
      if (!node2) node2 = {value: 0}
      let sum = node1.value + node2.value + carryover
      carryover = 0
      sumList.add(sum%10)
      carryover = Math.floor(sum/10)
      node1 = node1.next
      node2 = node2.next
    }
  }
  return sumList
}

let list1 = new linkedList
console.log(list1.add(0).add(0).add(1))
let list2 = new linkedList
console.log(list2.add(9).add(9).add(9))
console.log("add2Numbers: ", add2NumbersLL(list1, list2))




