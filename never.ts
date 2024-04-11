// THE NEVER TYPE
// The never type represents the type of values that never occur.
// For instance, never is the return type for a function expression
// or an arrow function expression that always throws an exception
// one that never returns; Variables also acquire the type never
// when narrowed by any type guards that can never be true.

// Function returning never must not have a reachable end point
function error(message: string): never {
  throw new Error(message);
}
// Inferred return type is never
function fail() {
  return error("Something failed");
}

const unreachableCaseError = (x: never): never => {
    throw new Error("This should never happen x:"+x);
}

interface UserCreatedEvent {
  eventType: 'USER_CREATED';
  params: {
    id: number;
    name: string;
    email: string;
  };
}

interface UserDeletedEvent {
  eventType: 'USER_DELETED';
  params: {
    id: string;
  };
}
interface UserUpdatedEvent {
    eventType: 'USER_UPDATED',
    params: {
        id: string;
        name: string;
        email: string;
        someThingElse: string;
    }
}

type BetterUserEvent = UserCreatedEvent | UserDeletedEvent | UserUpdatedEvent;
//Here a union type is formed for all the possible events that can occur
//The "Union discriminant" is the eventType property
//which sets them apart from each other and determines which event is being handled

const handleBetterUserEvent = (event: BetterUserEvent) => {
    console.log(event.eventType);
    switch (event.eventType) {
        case 'USER_CREATED':
          // handleUserCreation(event.params.id, event.params.name, event.params.email);
          console.log(event.params.name);
          return;
        case 'USER_DELETED':
            // handleUserDeletion(event.params.id);
            console.log(event.params.id);
            return;
        case 'USER_UPDATED':
            // handleUserUpdate(event.params.id, event.params.name, event.params.email, event.params.someThingElse);
            console.log(event.params.id);
            return;
        //     //If for some reason any other event is passed, the function will throw an error
        //     //Because it is not of the type never and should never happen
        //     //This is a good way to catch errors in your code
        //     //To remember to add a case for the new event
        default:
          return unreachableCaseError(event);
    }
}