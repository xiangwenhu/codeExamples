const name = "Tom";
function getName(){
    return console.log("this:", this);
}

const person = {
    name: "小红"
}

const person2 = {
    name: "小明"
}

var boundGetName  = getName.bind(person);
boundGetName();

// 多次bind，最后bind的是谁呢
var boundGetName2  = getName.bind(person).bind(person2);
boundGetName2()