// Generics explained:
// Generics are a way to make components more flexible and reusable.
// Just like functions can take parameters,
// generics allow you to create components
// that can work over a variety of types
// rather than a single one.

interface Box<T> {
    contents: T;
}

const boxOfAnything: Box<any> = {
    contents: [],
};

const boxOfStrings: Box<string[]> = {
    contents: ['hello', 'world'],
};
const boxOfString: Box<string> = {
    contents: 'hello'
};
const boxOfNumbers: Box<number[]> = {
    contents: [1, 2, 3]
};

console.log(boxOfStrings.contents); // Output: ['hello', 'world']
console.log(boxOfString.contents); // Output: 'hello'
console.log(boxOfNumbers.contents); // Output: [1, 2, 3]

function addItemToBox<T>(box: Box<T[]>, item: T): void {
    box.contents = [...box.contents, item];
}

addItemToBox(boxOfAnything, 1);
addItemToBox(boxOfAnything, 'hello');
addItemToBox(boxOfAnything, null);
addItemToBox(boxOfAnything, ['world', '!']);
console.log(boxOfAnything.contents); // Output: ['hello', 'world', '!']





class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    getAllItems(): T[] {
        return [...this.items];
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // Type checks for number

const stringStack = new Stack<string>();
stringStack.push('hello');
stringStack.push('world');
stringStack.push('!');
console.log(stringStack.getAllItems()); // Output: ['hello', 'world']
