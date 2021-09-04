
Function.prototype.call = function (context) {
  context = (context == null || context == undefined) ? window : new Object(context);
  context.fn = this;
  var arr = [];
  for (var i = 1; i < arguments.length; i++) {
    arr.push('arguments[' + i + ']');
  }
  var r = eval('context.fn(' + arr + ')');
  delete context.fn;
  return r;
}




// 非函数判断
// const obj = Object.create(Object.prototype);
// obj.call({}, 100)



// 冻结
// const obj = {
//   fn() {
//     console.log('我是fn函数')
//   },
//   name: "TOM"
// };

// Object.freeze(obj)

// function getName() {
//   console.log('name:', this.name);
// }

// getName.call(obj);
// obj.fn()



// delete 现场保持
const obj = {
   fn(){
     console.log('我是fn函数')
   },
   name: "TOM"
};

function getName(){
  console.log('name:', this.name);
}

getName.call(obj);
obj.fn()
