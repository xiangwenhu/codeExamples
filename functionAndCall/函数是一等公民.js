
function helloWorld() {
    console.log("hello world");
}

/**
 * 一等公民：如果某个编程语言的函数，可以和这个语言的数据类型做一样的事情，我们就把这个语言中的函数称为一等公民
 * 
 */


// 作为变量
var helloWorld2 = function(){
    console.log("hello world 2");
}


// 作为作为参数作为参数传递
function helloWorld3(cb) {
    cb();
}

// 作为结果返回
function add(n1){
    return function(n2){
        return n1 + n2
    }
}

// 作为属性
var person = {
    name: "Tom",
    getName(){
        return this.name;
    }
}