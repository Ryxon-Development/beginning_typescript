"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
const unreachableCaseError = (x) => {
    throw new Error("This should never happen x:" + x);
};
const handleBetterUserEvent = (event) => {
    console.log(event.eventType);
    switch (event.eventType) {
        case 'USER_CREATED':
            console.log(event.params.name);
            return;
        case 'USER_DELETED':
            console.log(event.params.id);
            return;
        case 'USER_UPDATED':
            console.log(event.params.id);
            return;
        default:
            return unreachableCaseError(event);
    }
};
//# sourceMappingURL=never.js.map