"use strict";
const logger = (something) => console.log(something);
const a = logger('Hello, Laracasts!');
const b = logger(2021);
const c = logger({ name: 'John Doe', age: 30 });
const d = logger(['Hello', 'World']);
console.log(a, b, c, d);
console.log('a = ', a);
const createUser = (email, name, age) => ({
    id: Math.floor(Math.random() * 100),
    email,
    password: 'password',
    name: name ? name : null,
    age: age ? age : undefined
});
const gebruiker = createUser('ryan@live.nl', 'ryan', 30);
console.log(gebruiker);
//# sourceMappingURL=void-null.js.map