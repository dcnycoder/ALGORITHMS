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
        this.head = { value: 0, next: null };
        this.tail = null;
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
        var node = LL.head;
        while (node) {
            if (!(node.value in nexts)) {
                nexts[node.value] = node;
            }
            else {
                nexts[node.value].next = nexts[node.value].next.next;
            }
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
var array = [1, 1, 2, 2, 2, 2, 3, 4, 4, 5, 6, 7, 1];
var noDuplicatesLL = removeDuplicates(array);
console.log("Result: ", noDuplicatesLL);
console.log("LL without duplicates: ", linkedListToArray(noDuplicatesLL));
