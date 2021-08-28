function a(){ 
    console.log(this,'a')
};
function b(){
    console.log(this,'b')
}

a.call(b, "b");
a.call.call(b,'b');
a.call.call.call(b,'b');
a.call.call.call.call(b,'b');

