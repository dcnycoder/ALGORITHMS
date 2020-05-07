//https://leetcode.com/problems/add-two-numbers/

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

class linkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  add(val) {
    const node = new Node(val)
    if (!this.head) this.head = this.tail = node
    else {
      this.tail.next = node
      this.tail = node
    }
    return this
  }
  remove(val) {
    let node = this.head
    if (node.value === val) {
      this.head = node.next
    }
    else {
      let previous = this.head
      while (node != null) {
        if (node.value === val) {
          if (node === this.tail) {
            this.tail = previous
            previous.next = null
          }
          else previous.next = node.next
        }
        else {
          previous = node
          node = node.next
        }

      }
    }

    return this
  } //end of remove
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

let list = new linkedList
console.log(list.add(1).add(2).add(3).add(4).remove(1))



