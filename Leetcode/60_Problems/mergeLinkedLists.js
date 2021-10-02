class Node {
    constructor(val, next) {
        this.val = (val)? val : 0
        this.next = (next)? new Node(next) : null
    }
}