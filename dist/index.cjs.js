'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function isTypeObject(value) {
    return typeof value === 'object';
}
function selectOption(opts, key, defaultReturn) {
    if (opts && isTypeObject(opts)) {
        return opts[key] || defaultReturn;
    }
    return defaultReturn;
}

exports.add = add;
exports.isTypeObject = isTypeObject;
exports.selectOption = selectOption;
exports.subtract = subtract;
