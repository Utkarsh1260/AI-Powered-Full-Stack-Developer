// 1. Define a function that accepts a name and a callback.
function processUser(name, callback) {
    console.log("Processing user: " + name);

    // callback becomes welcome(name)
    callback(name);
}

// 2. Define the callback function.
function welcome(name) {
    console.log("Welcome, " + name);
}

// 3. Pass welcome as the callback argument.
processUser("Aman", welcome);

// Output:
// Processing user: Aman
// Welcome, Aman