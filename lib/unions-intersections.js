"use strict";
const handleUserEvent = (event) => {
    if (event.eventType === 'USER_CREATED') {
        handleUserCreation(event.params.id, event.params.name, event.params.email);
        console.log(event.params.name);
        return;
    }
    if (event.eventType === 'USER_DELETED') {
        handleUserDeletion(event.params.id);
        console.log(event.params.id);
        return;
    }
};
function handleUserCreationFormSubmit(id, name, email) {
    const event = {
        eventType: 'USER_CREATED',
        params: {
            id: id,
            name: name,
            email: email
        }
    };
    processUserEvent(event);
}
function handleUserDeletionFormSubmit(id) {
    const event = {
        eventType: 'USER_DELETED',
        params: {
            id: id
        }
    };
    processUserEvent(event);
}
function handleFormSubmit(event) {
    event.preventDefault();
    const userIdInput = document.getElementById('userId');
    const userNameInput = document.getElementById('userName');
    const userEmailInput = document.getElementById('userEmail');
    if (userIdInput && userNameInput && userEmailInput) {
        const userId = parseInt(userIdInput.value);
        const userName = userNameInput.value;
        const userEmail = userEmailInput.value;
        handleUserCreation(userId, userName, userEmail);
    }
    else {
        console.error("One or more form elements not found.");
    }
}
function handleUserCreation(id, name, email) {
    const event = {
        eventType: 'USER_CREATED',
        params: {
            id: id,
            name: name,
            email: email
        }
    };
    fetch('/api/users/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event.params)
    })
        .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create user');
        }
        return response.json();
    })
        .then(data => {
        console.log(data);
    })
        .catch(error => {
        console.error(error);
    });
}
function handleUserDeletion(id) {
    const event = {
        eventType: 'USER_DELETED',
        params: {
            id: id
        }
    };
    fetch('/api/users/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
        .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
        return response.json();
    })
        .then(data => {
        console.log(data);
    })
        .catch(error => {
        console.error(error);
    });
}
function processUserEvent(event) {
    handleUserEvent(event);
}
handleUserCreationFormSubmit(1, 'John Doe', 'john@example.com');
handleUserDeletionFormSubmit('2');
//# sourceMappingURL=unions-intersections.js.map