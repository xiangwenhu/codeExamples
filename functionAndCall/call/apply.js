
/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 */

var print = console.log;
var slice = Array.prototype.slice
var rate = 1

function sum(num1, num2){
    return num1 + num2;
}


console.log(sum.apply(null, [1,2]))