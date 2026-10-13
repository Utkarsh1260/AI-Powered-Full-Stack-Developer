// map(callback)
// Executes the callback for each array element.
// Stores each callback's return value in a new array.
// The original array remains unchanged.
// The returned array normally has the same length as the original.

let nums = [1, 2, 3, 4];

// Double every element
let doubled = nums.map(n => n * 2);

console.log("Original:", nums);  // [1, 2, 3, 4]
console.log("Doubled:", doubled); // [2, 4, 6, 8]

// Convert numbers into strings
let strings = nums.map(n => String(n));

console.log(strings); // ["1", "2", "3", "4"]

// Accessing value and index
let result = nums.map((value, index) => {
    return value + index;
});

console.log(result); // [1, 3, 5, 7]