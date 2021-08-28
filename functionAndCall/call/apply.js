
/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 */

var print = console.log;
var slice = Array.prototype.slice
var rate = 1

const sumHeler = {
    rate: 1,
    sumRate() {
        return slice.call(arguments).reduce(function (total, cur) {
            return total + cur
        }, 0) * this.rate
    }
}

print(sumHeler.sumRate(10, 20))

// 数组
print(sumHeler.sumRate.apply({
    rate: 2
}, [10, 20]))


// 类数组, NodeList
print(sumHeler.sumRate.apply({
    rate: 2
}, {
    length:2,
    "0": 10,
    "1": 20
}))