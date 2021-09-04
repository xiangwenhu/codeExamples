const EventEmitter = require('events');

// 使用如下
const emitter = new EventEmitter();

function event1(...args) {
    console.log("event1:", ...args);
}

function event1_once(...args) {
    console.log("noce event1:", ...args);
}


emitter.on("event1", event1);
emitter.on("event1", event1);
emitter.once("event1", event1_once);

emitter.off("event1", event1);

emitter.emit("event1");
