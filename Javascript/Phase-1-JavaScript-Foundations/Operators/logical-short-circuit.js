
// 1. Logical AND (&&)
// Returns the first falsy value, or the last value if all are truthy.

console.log('"hello" && "world":', "hello" && "world");
console.log('0 && "hello":', 0 && "hello");
console.log('"user" && 100:', "user" && 100);

// 2. Logical OR (||)
// Returns the first truthy value, or the last value if all are falsy.

console.log('"" || "default":', "" || "default");
console.log('"user" || "guest":', "user" || "guest");
console.log('0 || false:', 0 || false);

// 3. Using OR (||) to Set a Default Value

let userInput = "";
let username = userInput || "Guest";

console.log("Username:", username);

// 4. Short-Circuiting
// The second expression is evaluated only if needed.

let name = "Aman";

console.log(name || "Guest"); // Second operand is skipped
console.log(0 && "Hello");    // Second operand is skipped
