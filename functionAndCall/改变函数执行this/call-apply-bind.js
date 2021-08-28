const name = "Tom";
function getName(){
    return console.log("this:", this);
}


getName();

const person = {
    name: "小明",
    getName
} 

getName.call(person);

getName.apply(person);

getName.bind(person)();