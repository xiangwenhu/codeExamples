
const slice = Array.prototype.slice
class EventEmitter {
    constructor() {
        this.events = {};
    }
    // 实现订阅
    on(type, listener) {
        if (!this.events[type]) {
            this.events[type] = [listener];
        } else {
            this.events[type].push(listener);
        }
        return this;
    }

    // 删除订阅
    off(type, listener) {
        const listeners = this.events[type];
        if (!listeners) return;
        const index = listeners.findIndex(function (l) {
            return l === listener
        });
        // ~-1 = 0, 只有不存的时候才为false
        // 存在的时候都是true
        if (~index) {
            listeners.splice(index, 1);
        }
        return this;

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

        // 复制当前的一个备份
        const listeners = this.events[type].slice();
        for (let i = 0; i < listeners.length; i++) {
            listeners[i].apply(this, slice.call(arguments, 1))
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
    console.log("once event1:", ...args);
}

function event3(...args) {
    console.log("event3:", ...args);
}


// 链式调用
emitter.on("event1", event1)
.on("event1", event1)
.once("event1", event1_once);

emitter.emit("event1", 1);
// emitter.off("event1", event1);

console.log("再次emit:===")
emitter.emit("event1", 2);
