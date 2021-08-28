
const log = console.log;

Function.prototype.call = function(context) {
    context = context || window;
    context["fn"] = this;
    let arg = [...arguments].slice(1); 
    context["fn"](...arg);
    delete context["fn"];
}


var person = {
    hello() { 
        return 'hello' +  this.name; 
    }
}

console.log(person.hello.call( {"name": "tom"}))

