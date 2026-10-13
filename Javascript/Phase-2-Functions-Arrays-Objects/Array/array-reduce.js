// reduce(callback, initialValue)
// The callback receives accumulator and current element.
// The accumulator stores the running result.
// The initialValue sets the accumulator's starting value.
// reduce() returns the final accumulated result.

let nums = [1, 2, 3, 4];

// Calculate the sum
let sum = nums.reduce((acc, n) => acc + n, 0);

console.log("Sum:", sum); // 10

// Calculate the product
let product = nums.reduce((acc, n) => acc * n, 1);

console.log("Product:", product); // 24

// Step-by-step accumulation
let total = nums.reduce((acc, n) => {
    let result = acc + n;

    console.log(`${acc} + ${n} = ${result}`);

    return result;
}, 0);

console.log("Final total:", total); // 10

// Output:
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// Final total: 10