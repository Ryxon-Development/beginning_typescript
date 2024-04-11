"use strict";
const logger2 = (something) => {
    if (typeof something === 'string') {
        console.log(something.toUpperCase());
        return;
    }
    else {
        console.log(something);
    }
};
logger2('Hello, Laracasts!');
logger2({ foo: 'bar' });
const anyFoo = {
    prop1: 'Hello',
    prop2: { foo: 'bar' }
};
const unknownFoo = {
    prop1: 'Hello',
    prop2: { foo: 'bar' }
};
if (typeof unknownFoo.prop1 === 'string') {
    console.log(unknownFoo.prop1.toUpperCase());
}
if (typeof unknownFoo.prop2 === 'object'
    && unknownFoo.prop2) {
    console.log();
    const a = unknownFoo.prop2.foo;
    if (typeof a === 'string') {
        console.log(a.toUpperCase());
    }
    else {
        console.log(a);
    }
}
//# sourceMappingURL=any-unknown.js.map