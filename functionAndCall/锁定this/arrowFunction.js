const name = "Tom";

class Person {

    #name = "小红"
    getName = ()=> {
        console.log("this", this, this.#name)
    }
}

let person = new Person();
person.getName();



// 尝试修改this
const person2 = {
    name: "小明"
}

person.getName.bind(person2)()