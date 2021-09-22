class Node {
  constructor(val, next = null) {
    this.val = (val)? val : null
  }
}

let LL1 = new Node(2)
LL1.next = new Node(4)
LL1.next.next = new Node(7)

let LL2 = new Node(1)
LL2.next = new Node(2)
LL2.next.next = new Node(10)
LL2.next.next.next = new Node(12)

//OLD SOLUTION
// function mergeLL(LL1, LL2) {
//   let pointer1Next = LL1
//   let pointer2Next = LL2
//   while (pointer1Next || pointer2Next) {
//     if (pointer1Next.next === null) pointer1Next = pointer2Next
//     else if (pointer2Next === null) return result
//     else if (pointer1Next.val>=pointer2Next.val) {
//       let oldNode1 = pointer1Next
//       let oldLL2Next = pointer2Next.next
//       pointer1Next = pointer2Next
//       pointer1Next.next = oldNode1
//       pointer2Next = oldLL2Next
//       result = LL2
//     }
//     else {
//       pointer1Next = pointer1Next.next
//       result = LL1
//     }
//   }
//   return result
// }

function mergeLL(LL1, LL2) {
  let p1 = LL1
  let p2 = LL2
  if (p2.val <= p1.val) {
    result = p2
    p2 = p2.next
  }
  else {
    result = p1
    p1 = p1.next
  }
  let p3 = result
  while (p1 || p2) {
    if (!p1) {
      let p2OldNext = p2.next
      p3.next = p2
      p2.next = p2OldNext
      return result
    }
    else if (!p2) {
      let p1OldNext = p1.next
      p3.next = p1
      p1.next = p1OldNext
      return result
    }
    else if (p2.val <= p1.val) {
      //p2.next should preserve the old p2.next

      p3.next = p2
      p2 = p2.next
    }
    else {
      p3.next = p1
      p1 = p1.next
    }
  }
  return result
}

console.log("result: ", mergeLL(LL1, LL2))