// Void, Null, Undefined

const logger = (something: unknown): void => console.log(something);

const a = logger('Hello, Laracasts!');
const b = logger(2021);
const c = logger({ name: 'John Doe', age: 30 });
const d = logger(['Hello', 'World']);
console.log(a, b, c, d);

console.log('a = ', a); //when added to a string, it will return undefined. Because the function does not return anything. (void)

interface Gebruiker {
    id: number;
    email: string;
    password: string;
    name: string|null;
    age?: number;
}

const createUser = (email : string, name: string|null, age: number|null): Gebruiker => ({
    id: Math.floor(Math.random() * 100),
    email,
    password: 'password',
    name: name ? name : null,
    age: age ? age : undefined
});

const gebruiker = createUser('ryan@live.nl', 'ryan', 30);

console.log(gebruiker); // { id: 23, email: '