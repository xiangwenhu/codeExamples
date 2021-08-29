/**
a.call(b) 最终被调用的是a,
a.call.call(b)， 最终被调用的 a.call
a.call.call.call(b)， 最终被执行的 a.call.call
 */

function a(){ 
    console.log(this,'a')
};
function b(){
    console.log(this,'b')
}

// a.call(b, "b");

a.call.call(b,'b');
a.call.call.call(b,'b');
a.call.call.call.call(b,'b');
a.call.call.call.call.call(b,'b');



print = console.log

print(a.call === Function.prototype.call)  // true
print(a.call === a.call.call)  // true
print(a.call === a.call.call.call)  // true