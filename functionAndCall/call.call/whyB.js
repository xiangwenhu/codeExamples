/**

基于之前的前提 a.call = b.call =  Function.prototype.call

1. a.call.call(b,'b')、a.call.call.call(b,'b')等， 实际是都等同于Function.prototype.call.call(b,'b')
2. 假定 Function.prototype.call = fn,   fn.call(b,'b')
3. call是改变的是this指向，fn.call(b) 理解为在b上执行fn函数，等于 b.fn(), 各种手写也是这么实现的
4.  a.call.call(b,'b') =  b.fn() , fn就是院上上的call函数， c.fn() = b.call
**/


function name(){
    console.log(this.name)
}