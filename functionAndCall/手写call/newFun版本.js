var hasStrictMode = (function () {
    "use strict";
    return this == undefined;
}());

var isStrictMode = function () {
    return this === undefined;
};

var getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};

function isFunction(fn){
    return typeof fn === "function";
}

function getContext(context) {
    var isStrict = isStrictMode();

    if (!hasStrictMode || (hasStrictMode && !isStrict)) {
        return (context === null || context === void 0) ? getGlobal() : Object(context);
    }
    // 严格模式下, 妥协方案
    return Object(context);
}


function generateFunctionCode(argsLength){
    var code = 'return arguments[0][arguments[1]](';
    for(var i = 0; i < argsLength; i++){
        if(i > 0){
            code += ',';
        }
        code += 'arguments[2][' + i + ']';
    }
    code += ')';
    // return arguments[0][arguments[1]](arg1, arg2, arg3...)
    return code;
}


Function.prototype.call = function (context) {

    // 不可以被调用
    if (typeof this !== 'function') {
        throw new TypeError(this + ' is not a function');
    }

    // 获取上下文
    var ctx = getContext(context);

    // 更为稳妥的是创建唯一ID, 以及检查是否有重名
    var propertyName = "__fn__" + Math.random() + "_" + new Date().getTime();
    var originVal;
    var hasOriginVal = isFunction(ctx.hasOwnProperty) ? ctx.hasOwnProperty(propertyName) : false;
    if (hasOriginVal) {
        originVal = ctx[propertyName]
    }

    ctx[propertyName] = this;
 
    var argArr = [];
    var len = arguments.length;
    for (var i = 1; i < len; i++) {
        argArr[i - 1] = arguments[i];
    }

    var r = new Function(generateFunctionCode(argArr.length))(ctx, propertyName, argArr);

    // 还原现场
    if (hasOriginVal) {
        ctx[propertyName] = originVal;
    } else {
        delete ctx[propertyName]
    }

    return r;
}

