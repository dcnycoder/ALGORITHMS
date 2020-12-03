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
        var node = LL.head;
        while (node) {
            var pointerToPrevNode = node;
            var comparedNode = node.next;
            while (comparedNode) {
                if (comparedNode.value === node.value) {
                    pointerToPrevNode.next = comparedNode.next;
                }
                else
                    pointerToPrevNode = pointerToPrevNode.next;
                comparedNode = comparedNode.next;
            }
            node = node.next;
        }
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
var array = [1, 5, 1, 2, 5, 4, 1, 2, 3, 1];
var noDuplicatesLL = removeDuplicates(array);
console.log("Result: ", noDuplicatesLL);
console.log("LL without duplicates: ", linkedListToArray(noDuplicatesLL));
