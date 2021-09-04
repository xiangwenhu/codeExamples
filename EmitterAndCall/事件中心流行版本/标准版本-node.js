const EventEmitter = require('events');


// 使用如下
const emitter = new EventEmitter();

function event1(...args) {
    console.log("event1:", ...args);
    emitter.on("event1", event1);
}

function event1_once(...args) {
    console.log("noce event1:", ...args);
}

// 链式调用
emitter.on("event1", event1)
.on("event1", event1)
.once("event1", event1_once);

emitter.emit("event1", 1);
// emitter.off("event1", event1);

console.log("再次emit:===")
emitter.emit("event1", 2);

