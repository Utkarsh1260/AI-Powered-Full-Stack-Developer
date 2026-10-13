// forEach(callback)
// Executes the callback once for each array element.
// The callback receives value, index, and the original array.
// forEach() returns undefined; use it for side effects.

let nums = [1, 2, 3];

// Using a regular function
nums.forEach(function(n) {
    console.log(n * 2);
});

// Output:
// 2
// 4
// 6

// Using an arrow function
nums.forEach(n => console.log(n * 2));

// Output:
// 2
// 4
// 6

// Accessing value, index, and the whole array
nums.forEach((value, index, array) => {
    console.log("Index:", index, "Value:", value);
});

// Output:
// Index: 0 Value: 1
// Index: 1 Value: 2
// Index: 2 Value: 3

// forEach() returns undefined
let result = nums.forEach(n => n * 2);
console.log(result); // undefined