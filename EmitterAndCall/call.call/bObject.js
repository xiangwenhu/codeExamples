
/**
 * https://tc39.es/ecma262/#sec-function.prototype.call
1. 如果thisArg是undefined 或者null, 会用global object替换,  这里说的是非严格模式
2. 其他的所有类型，都会调用 ToObject进行转换， 这里说的是非严格模式
 */


"use strict";
function a(){ 
    console.log(typeof this)
    console.log(this,'a')
};

a.call("b")


function a(){ 
    console.log(typeof this)
    console.log(this,'a')
};

a.call("b")

