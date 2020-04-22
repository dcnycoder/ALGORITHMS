"use strict";
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        if (size === void 0) { size = 153; }
        this.size = size;
        this.keyMap = new Array(size);
    }
    HashTable.prototype.hash = function (key) {
        var primeNumber = 31;
        var total = 0;
        for (var i = 0; i < Math.min(key.length || 100); i++) {
            var value = key.charCodeAt(i);
            total = (total * primeNumber + value) % this.keyMap.length;
        }
        return total;
    };
    //Structure of keyMaps: [['green', '#399043']]
    HashTable.prototype.set = function (value) {
        console.log('value before hashing: ', value);
        var index = this.hash(value[0]);
        console.log('value: ', value);
        console.log('index: ', value[0], index);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [value];
        }
        else {
            var valuePresent = this.keyMap[index].reduce(function (acc, elem) {
                return acc || (value[0] === elem[0]) ? true : false;
            }, false);
            console.log('valuePresent: ', valuePresent);
            if (!valuePresent)
                this.keyMap[index].push(value);
        }
    };
    //Structure of keyMaps: [['green', '#399043']]
    HashTable.prototype.get = function (value) {
        //find the corresponding index in this.keyMap and return it's value
        var index = this.hash(value[0]);
        var result = undefined;
        for (var i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === value[0])
                result = this.keyMap[index][i][1];
        }
        return result;
    };
    HashTable.prototype.keys = function () {

        let result = this.keyMap.filter(function (elem) { return elem.length > 0; })
            .reduce((acc, elem) => {
                acc = acc.concat(
                    elem.reduce((acc, value) => {
                        acc.push(value[0])
                        return acc
                    }, [])
                )
                return acc
            }, [])
        return result;
    };

    HashTable.prototype.values = function () {
        let result = this.keyMap
            .reduce((acc, elem) => {
                acc = acc.concat(
                    elem.reduce((acc, value) => {
                        acc.push(value[1])
                        return acc
                    }, [])
                )
                return acc
            }, [])
        return result
    };
    return HashTable;
}());
var ht = new HashTable;
console.log('ht hash hello: ', ht.set(['blue', '#394043']));
console.log('ht hash hello: ', ht.set(['green', '#399043']));
console.log('ht hash hello: ', ht.set(['red', '#356883']));
//console.log('ht get blue: ', ht.get('blue'))
//console.log('ht get green: ', ht.get('green'))
console.log("Ht: ", ht)
//console.log("Ht.keys(): ", ht.keys());
console.log("Ht.values(): ", ht.values());

