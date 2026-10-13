// find(callback)
// Checks array elements in order.
// Returns the first element for which the callback returns true.
// Returns undefined if no element matches.

let users = [
    { name: "Aman", age: 20 },
    { name: "Priya", age: 30 },
    { name: "Rahul", age: 25 }
];

// Find the first user older than 25
let user = users.find(u => u.age > 25);

console.log(user);
// { name: "Priya", age: 30 }

// No matching user
let missing = users.find(u => u.age > 50);

console.log(missing); // undefined