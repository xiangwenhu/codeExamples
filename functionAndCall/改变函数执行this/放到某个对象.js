const name = "Tom";
function getName(){
    return console.log("this:", this);
}

const person = {
    name: "小明",
    getName
}

person.getName();