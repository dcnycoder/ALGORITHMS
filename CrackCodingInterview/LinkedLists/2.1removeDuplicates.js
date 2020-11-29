var LinkedList = /** @class */ (function () {
    function LinkedList(array) {
        var _this = this;
        this.head = { value: 0, next: null };
        this.tail = null;
        if (array.length) {
            this.head.value = array[0];
            array.forEach(function (elem) {
                if (!_this.head) {
                    _this.head.value = elem;
                    _this.tail = null;
                }
            });
            for (var i = 0; i < array.length; i++) {
            }
        }
    }
    return LinkedList;
}());
function removeDuplicates(linkedList) {
}
var LL = new LinkedList([1, 2, 3, 4, 5, 6]);
