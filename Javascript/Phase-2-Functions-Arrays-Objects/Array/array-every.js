// every(callback)
// Returns true if every element passes the condition.
// Returns false as soon as one element fails.
// An empty array returns true.

let nums = [1, 2, 3];

// Are all numbers positive?
console.log(nums.every(n => n > 0)); // true

// Are all numbers greater than 2?
console.log(nums.every(n => n > 2)); // false

// Are all numbers even?
console.log(nums.every(n => n % 2 === 0)); // false

// An empty array
console.log([].every(n => n > 0)); // true