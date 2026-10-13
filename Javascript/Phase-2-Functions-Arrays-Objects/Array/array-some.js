// some(callback)
// Returns true if at least one element passes the condition.
// Returns false if no elements match.
// Stops checking once a match is found.

let nums = [1, 2, 3];

// Is at least one number greater than 2?
console.log(nums.some(n => n > 2)); // true

// Is at least one number greater than 10?
console.log(nums.some(n => n > 10)); // false

// Check whether any number is even
console.log(nums.some(n => n % 2 === 0)); // true