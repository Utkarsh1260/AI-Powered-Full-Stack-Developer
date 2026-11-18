
console.log("1. Synchronous code - Start");

// Macrotask Queue
setTimeout(() => {
    console.log("2. Macrotask Queue - setTimeout callback");
}, 0);

// Microtask Queue
Promise.resolve().then(() => {
    console.log("3. Microtask Queue - Promise callback");
});

// Synchronous code
console.log("4. Synchronous code - End");

// Expected Output:
// 1. Synchronous code - Start
// 4. Synchronous code - End
// 3. Microtask Queue - Promise callback
// 2. Macrotask Queue - setTimeout callback
