// filter(callback)
// Executes the callback for each array element.
// Keeps elements for which the callback returns true.
// Returns a new array; the original remains unchanged.
// The returned array can be shorter or empty.

let nums = [1, 2, 3, 4, 5, 6];

// Keep even numbers
let evens = nums.filter(n => n % 2 === 0);

console.log("Even numbers:", evens); // [2, 4, 6]

// Keep numbers greater than 3
let greater = nums.filter(n => n > 3);

console.log("Greater than 3:", greater); // [4, 5, 6]

// Keep numbers greater than 10
let empty = nums.filter(n => n > 10);

console.log("No matches:", empty); // []

console.log("Original:", nums); // [1, 2, 3, 4, 5, 6]