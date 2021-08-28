/**
a.call(b) 最终被调用的是a,
a.call.call(b)， 最终被调用的 a.call
a.call.call.call(b)， 最终被执行的 a.call.call
 */

print = console.log

print(a.call === Function.protype.call)  // true
print(a.call === a.call.call)  // true
print(a.call === a.call.call.call)  // true