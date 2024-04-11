const greeting: string = "Hello, Laracasts!";
const year: number = 2021;

console.log(greeting + ' its the year '+year); // Hello, Laracasts!

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

interface Book {
    id: number;
    name: string;
    releaseDate?: Date; // Optional because of the question mark before the colon :
}

const getBookById = (id: number): Book => ({
    id,
    name: 'The Great Gatsby'
    // ,releaseDate: new Date()
})

const getUserById = (id: number): User => ({
    id,
    name: 'John Doe',
    age: 30,
    email: 'ryan@live.nl'
})

console.log(getUserById(1)); // User with id 1
console.log(getBookById(1)); // Book with id 1

const saveBook = (book: Book) => console.log('Saving book :', { book });
const saveUser = (user: User) => console.log('Saving user :', { user });


const user = getUserById(1);
const book = getBookById(1);

saveUser(user); // Saving user { user: { id: 1, name: 'John Doe', age: 30, email: '
saveBook(book); // Saving book { book: { id: 1, name: 'The Great Gatsby' }