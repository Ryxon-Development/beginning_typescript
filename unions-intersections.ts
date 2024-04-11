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

// This is a union type
// UserEvent can be either UserCreatedEvent or UserDeletedEvent
type UserEvent = UserCreatedEvent | UserDeletedEvent;
const handleUserEvent = (event: UserEvent) => {
    if(event.eventType === 'USER_CREATED') {
        handleUserCreation(event.params.id, event.params.name, event.params.email);
        console.log(event.params.name);
        return;
    }

    if(event.eventType === 'USER_DELETED') {
        handleUserDeletion(event.params.id);
        console.log(event.params.id);
        return;
    }
}


// Function to handle form submission for creating a user
function handleUserCreationFormSubmit(id: number, name: string, email: string) {
    const event: UserEvent = {
        eventType: 'USER_CREATED',
        params: {
            id: id,
            name: name,
            email: email
        }
    };

    processUserEvent(event);
}

// Function to handle form submission for deleting a user
function handleUserDeletionFormSubmit(id: string) {
    const event: UserEvent = {
        eventType: 'USER_DELETED',
        params: {
            id: id
        }
    };

    processUserEvent(event);
}

// Function to handle form submission
function handleFormSubmit(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve form elements
    const userIdInput = document.getElementById('userId') as HTMLInputElement | null;
    const userNameInput = document.getElementById('userName') as HTMLInputElement | null;
    const userEmailInput = document.getElementById('userEmail') as HTMLInputElement | null;

    // Check if any of the input elements are null
    if (userIdInput && userNameInput && userEmailInput) {
        // Extract form values
        const userId = parseInt(userIdInput.value);
        const userName = userNameInput.value;
        const userEmail = userEmailInput.value;

        // Call function to handle user creation
        handleUserCreation(userId, userName, userEmail);
    } else {
        console.error("One or more form elements not found.");
    }
}

function handleUserCreation(id: number, name: string, email: string) {
    const event: UserCreatedEvent = {
        eventType: 'USER_CREATED',
        params: {
            id: id,
            name: name,
            email: email
        }
    };

    // Make AJAX request to create user
    fetch('/api/users/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event.params) // Send user event data in the request body
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create user');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log success message from the server
        })
        .catch(error => {
            console.error(error);
        });
}

function handleUserDeletion(id: string) {
    const event: UserDeletedEvent = {
        eventType: 'USER_DELETED',
        params: {
            id: id
        }
    };

    // Make AJAX request to delete user
    fetch('/api/users/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event) // Send user event data in the request body
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log success message from the server
        })
        .catch(error => {
            console.error(error);
        });
}


// Function to process a single user event
function processUserEvent(event: UserEvent) {
    // Here you would handle the user event as needed
    handleUserEvent(event);
}

// Attach form submission event listener
// var userForm = document.getElementById('userForm') as HTMLFormElement | null;
// if (userForm) {
//     userForm.addEventListener('submit', handleFormSubmit);
// }

// Now let's simulate form submissions
handleUserCreationFormSubmit(1, 'John Doe', 'john@example.com');
handleUserDeletionFormSubmit('2');