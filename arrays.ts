//Arrays and Tuples

const laracastsTeam: string[] = [
    'Jeffrey Way',
    'Taylor Otwell',
    'Adam Wathan',
    'Freek Van der Herten'
];

const listOfNumbers: number[] = [1, 2, 3, 4, 5];

const numbers: Array<number> = [1, 2, 3, 4, 5];

const stringOrNumber: (string | number)[] = ['Hello', 1, 2, 3, 'World'];

// Tuples
const tuple: [number, string] = [2020, 'why'];
// const wrongTuple: [number, string] = ['why', 2020];

console.log(laracastsTeam);
console.log(listOfNumbers);
console.log(numbers);
console.log(stringOrNumber);
console.log(tuple);
// console.log(wrongTuple);