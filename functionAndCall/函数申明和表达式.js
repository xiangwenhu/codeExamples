
// 函数申明，有函数提升
helloWorld();
function helloWorld() {
    console.log("hello world");
}


// 函数表达式 就是一个变量
helloWorld2();
var helloWorld2 = function () {
    console.log("hello world");  
}


// ES6 暂时性死区
typeof newLetVariable; // ReferenceError

let newLetVariable;
