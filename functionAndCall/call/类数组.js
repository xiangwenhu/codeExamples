
// 那类数组和数组有啥区别：
// 1、都有length属性
// 2、类数组也可以for循环遍历
// 3、类数组不具备数组的原型方法

var print = console.log;

// childNodes querySelectorAll返回结果就是childNodes
// Array.isArray(document.body.childNodes)

// arguments
function argTest() {
    console.log(Array.isArray(arguments));
}
argTest();


// 转换为 数组

var print = console.log;
// slice,可以尝试splice试试
function sum() {
    return Array.prototype.slice.call(arguments).reduce(function (total, cur) {
        return total + cur
    }, 0)
}
print(sum(1, 2));

// Array.from
function sum() {
    return Array.from(arguments).reduce(function (total, cur) {
        return total + cur
    }, 0)
}
print(sum(1, 2));


// 拓展运算符
function sum() {
    return [...arguments].reduce(function (total, cur) {
        return total + cur
    }, 0)
}
print(sum(1, 2));
