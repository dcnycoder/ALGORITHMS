var LLNode = /** @class */ (function () {
    function LLNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.next = next;
        this.value = value;
        this.next = next;
    }
    return LLNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(array) {
        var _this = this;
        this.head = new LLNode(0, null);
        this.tail = this.head;
        array.forEach(function (elem) {
            if (!_this.head.value) {
                _this.head.value = elem;
                _this.tail = _this.head;
                _this.head.next = _this.tail;
            }
            else {
                _this.tail.next = new LLNode(elem);
                _this.tail = _this.tail.next;
            }
        });
    }
    return LinkedList;
}());
function removeDuplicates(array) {
    if (array.length) {
        var LL = new LinkedList(array);
        //console.log("LL: ", LL)
        var nexts = {};
        console.log('nexts[1]: ', nexts[1])
        var node = LL.head;
        while (node) {
            if (!(node.value in nexts)) {
                nexts[node.value] = node;
            }
            else {
                nexts[node.value] = nexts[node.value].next;
                nexts[node.value] = node;
            }
            console.log('nexts[1]: ', nexts[1])
            node = node.next;
        }
        //console.log("nexts: ", nexts)
        return LL;
    }
}
function linkedListToArray(linkedList) {
    var node = linkedList.head;
    var result = [];
    while (node) {
        result.push(node.value);
        node = node.next;
    }
    return result;
}
var array = [1, 2, 3, 1, 1];
var noDuplicatesLL = removeDuplicates(array);
console.log("Result: ", noDuplicatesLL);
console.log("LL without duplicates: ", linkedListToArray(noDuplicatesLL));

let obj = {
    a: 1
}

let nexts = {
    next: obj.a
}

nexts.next = 2

console.log(obj['a'])
console.log(nexts.next)