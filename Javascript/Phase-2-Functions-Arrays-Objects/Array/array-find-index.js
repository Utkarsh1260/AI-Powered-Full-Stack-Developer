// findIndex(callback)
// Checks array elements in order.
// Returns the index of the first matching element.
// Returns -1 if no element matches.

let nums = [10, 20, 30, 40, 50];

// Find the first number greater than 25
let index = nums.findIndex(n => n > 25);

console.log(index); // 2
console.log(nums[index]); // 30

// No matching element
let missing = nums.findIndex(n => n > 100);

console.log(missing); // -1