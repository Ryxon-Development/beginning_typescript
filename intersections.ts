//In TypeScript, intersections allow you to combine
// multiple types into a single type. When you use
// the & operator between types, you create a new
// type that includes all properties and methods
// from each individual type. This can be useful
// when you need an object to have features from
// different sources, ensuring it adheres to
// multiple sets of rules or requirements.
// Intersections help make your code more
// flexible and expressive by allowing you
// to compose complex types from simpler ones.
interface Serializable {
    serialize(x: unknown): string;
}

interface Identifiable {
    uuid: string;
}

const something: Serializable & Identifiable = {
    uuid: 'uuid-1234-5678',
    serialize(x: unknown) {
        return JSON.stringify(x);
    }
};

type Dictionary = {
    [key: string]: string;
};

const dictionary: Dictionary = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
};
// A record is a dictionary with a fixed key type and value type
// it has different type syntax
// You could also call a Record of copy of the Original Dictionary with changes type values
type OtherDictionary = Record<string, string>;
type UknownRecord = Record<PropertyKey, unknown>;