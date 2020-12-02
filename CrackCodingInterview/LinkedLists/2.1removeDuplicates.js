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
        this.array = array;
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
        return LL;
    }
}
console.log(removeDuplicates([1, 2, 3, 4]));
