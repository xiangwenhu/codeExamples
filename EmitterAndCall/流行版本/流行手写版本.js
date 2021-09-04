
const slice = Array.prototype.slice
class EventEmitter {
    constructor() {
        this.events = {};
    }
    // 实现订阅
    on(type, callBack) {
        if (!this.events[type]) {
            this.events[type] = [callBack];
        } else {
            this.events[type].push(callBack);
        }
    }
    // 删除订阅
    off(type, callBack) {
        if (!this.events[type]) return;
        this.events[type] = this.events[type].filter(function (item) {
            return item !== callBack;
        });
    }
    // 只执行一次订阅事件
    once(type, listener) {
        function fn() {
            listener.apply(this, slice.call(arguments));
            this.off(type, fn);
        }
        return this.on(type, fn);
    }
    // 触发事件
    emit(type) {
        if (!this.events[type]) {
            return
        }

        const listeners = this.events[type];
        for (let i = 0; i < listeners.length; i++) {
            listeners[i].apply(this, Array.prototype.slice.call(arguments, 1))
        }

    }
}

// 使用如下
const emitter = new EventEmitter();

function event1(...args) {
    console.log("event1:", ...args);
    emitter.on("event1", event1);
}

function event1_once(...args) {
    console.log("noce event1:", ...args);
}

emitter.on("event1", event1);
emitter.on("event1", event1);
emitter.once("event1", event1_once);

emitter.emit("event1", 1);
emitter.off("event1", event1);

console.log("再次emit:===")
emitter.emit("event1", 2);
