// Write a program to find the node 
// at which the intersection of two singly linked lists begins.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 8
// [4,1,8,4,5]
// [5,6,1,8,4,5]
// 2
// 3

class LLNode {
  constructor(value, next) {
    this.value = value? value : 0
    this.next = next? next : null
  }
}

class LinkedList {
  constructor(arr) {
    arr.forEach(elem => {
      const newNode = new LLNode(elem)
      if (!this.head) {
        this.head = this.tail = newNode
      }
      else {
        this.tail.next = newNode
        this.tail = this.tail.next
      }
    })
  }
}

function LLToArray(linkedList) {
  var node = linkedList.head;
  var result = [];
  while (node) {
      result.push(node.value);
      node = node.next;
  }
  return result;
}

var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null
  else {
    let visitedNodes = {}
    let nodesAB = [headA, headB]
    while (nodesAB.length) {
      nodesAB.forEach(elem => {
        if (!(elem.val in visitedNodes)) {
          visitedNodes[elem.val] = [elem]
        }
        else {
          if (visitedNodes[elem.val].includes(elem)) return elem
          else visitedNodes[elem.val].push(elem)
        }
      })
      nodesAB = nodesAB.reduce((acc, elem) => {
        if (elem.next!=null) acc.push(elem.next)
          return acc
      }
      , [])
    }
  }
  return null
};