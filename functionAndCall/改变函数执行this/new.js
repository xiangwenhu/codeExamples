

const name = "Tom";
function getName(){
    console.log("this:", this);
    return this;
}

// global
getName()
// function 本身
new getName()



function Person(){
    this.getName = getName;
}

new Person().getName();

// new的返回，是可以自定义的。
function Person2(){
    this.getName = getName;
    return {
        a: 1
    }
}

new Person2().getName();