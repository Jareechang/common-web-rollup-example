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

export { add, isTypeObject, selectOption, subtract };
