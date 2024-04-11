"use strict";
const greeting = "Hello, Laracasts!";
const year = 2021;
console.log(greeting + ' its the year ' + year);
const getBookById = (id) => ({
    id,
    name: 'The Great Gatsby'
});
const getUserById = (id) => ({
    id,
    name: 'John Doe',
    age: 30,
    email: 'ryan@live.nl'
});
console.log(getUserById(1));
console.log(getBookById(1));
const saveBook = (book) => console.log('Saving book :', { book });
const saveUser = (user) => console.log('Saving user :', { user });
const user = getUserById(1);
const book = getBookById(1);
saveUser(user);
saveBook(book);
//# sourceMappingURL=index.js.map