//The difference between type and interface are:
// - Interfaces can be extended, type aliases can not.
// - Interfaces are open, type aliases are closed.
// - Interfaces are more commonly used in the community.
// - Type aliases can be used to define union types.
// - Type aliases can be used to define tuple types.
// - Type aliases can be used to define intersection types.
// - Type aliases can be used to define primitive types.
// - Type aliases can be used to define object types.
// - Type aliases can be used to define function types.
// - Type aliases can be used to define array types.
// - Type aliases can be used to define any other types.
interface IUser {
    id: number;
    name: string;
}

type OtherUser = {
    id: number;
    name: string;
}




const user1: IUser = { id: 1, name: 'John Doe' };
const user2: OtherUser = { id: 2, name: 'Jane Doe' };

interface TimeStamps {
    createdAt: Date;
    updatedAt: Date;
}

const persistedUser: IUser & TimeStamps = {
    id: 1,
    name: 'John Doe',
    createdAt: new Date(),
    updatedAt: new Date()
}

console.log(user1);