
/**
 * IIFE (Immediately Invoked Function Expression)  立即调用函数表达式，
 * 也叫自执行匿名函数 
 * 优点： 避免变量污染
 * 
 */


// 常见形式, 无参数
; (function helloWorld() {
    console.log("hello world");
})();


// 传参
; (function helloWorld(name) {
    console.log("hello world,", name);
})("云");


// 很多求值的符号都可以
; void function helloWorld() {
    console.log("hello world");
}();

; +function helloWorld() {
    console.log("hello world");
}();

; -function helloWorld() {
    console.log("hello world");
}();

; ~function helloWorld() {
    console.log("hello world");
}();


; !function helloWorld() {
    console.log("hello world");
}();







