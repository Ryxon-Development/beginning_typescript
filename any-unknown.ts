//UKNOWN forces you to check the type before you can use it
//ANY does not force you to check the type before you can use it (room for errors)

// const logger2 = (something: any): void => {
const logger2 = (something: unknown): void => {

    // console.log(something.toUpperCase());

    if (typeof something === 'string') {
        console.log(something.toUpperCase());
        return;
    }else{
        console.log(something);
    }
}
logger2('Hello, Laracasts!');
logger2( { foo: 'bar' });

//defined type with any
type anyType = { prop1: any, prop2: any };
const anyFoo: anyType = {
    prop1: 'Hello',
    prop2: { foo: 'bar' }
};

//specific type with unknown
type unknownType = { prop1: unknown, prop2: unknown };
const unknownFoo: unknownType = {
    prop1: 'Hello',
    prop2: { foo: 'bar' }
};

if (typeof unknownFoo.prop1 === 'string') {
    console.log(unknownFoo.prop1.toUpperCase());
}
if (typeof unknownFoo.prop2 === 'object'
    && unknownFoo.prop2) {
    // console.log(unknownFoo.prop2.foo); // doesnt work, because unknown does not allow you to access the properties of the object
    console.log(); // works, because we are casting the type to an object

    const a = (unknownFoo.prop2 as { foo: unknown }).foo;

    if (typeof a === 'string') {
        console.log(a.toUpperCase());
    }else{
        console.log(a);
    }
}

//this is a type assertion, it tells typescript that the type is a certain type
// HTMLCanvasElement is a type that is defined in the DOM
// the canvas element is used for drawing graphics
// returns a canvas element instead of the default HTMLElement
// const canvas = document.getElementById('canvas') as HTMLCanvasElement;
