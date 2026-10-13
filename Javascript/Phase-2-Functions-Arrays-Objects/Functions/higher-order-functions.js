// 1. Define a function that accepts another function as an argument.
function processUser(name, callback) {
    console.log("Processing user: " + name);

    // callback becomes welcome(name)
    callback(name);
}

// 2. Define the callback function.
function welcome(name) {
    console.log("Welcome, " + name);
}

// 3. Pass welcome as an argument to processUser.
processUser("Aman", welcome);

// Output:
// Processing user: Aman
// Welcome, Aman


// ==========================================
// 4. Return a function from another function.
// ==========================================

function makeGreeter(greeting) {
    // Return a new function that accepts a name.
    return function(name) {
        console.log(greeting + ", " + name);
    };
}

// 5. Store the returned function in helloGreeter.
const helloGreeter = makeGreeter("Hello");

// 6. Execute the returned function with "Aman".
helloGreeter("Aman");

// Output:
// Hello, Aman