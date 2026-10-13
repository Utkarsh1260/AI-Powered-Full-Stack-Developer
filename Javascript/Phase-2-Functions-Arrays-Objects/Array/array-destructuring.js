// Array destructuring — [variable1, variable2, ...] = array
// Extracts array elements into individual variables.

// 1. Traditional way of accessing array elements
let arr = [10, 20, 30];

let a = arr[0];
let b = arr[1];

console.log("Traditional:", a, b); // 10 20


// 2. Basic array destructuring
// Syntax: let [variable1, variable2, ...] = array
let [x, y, z] = arr;

console.log("Destructuring:", x, y, z); // 10 20 30


// 3. Skipping elements
// An empty position between commas skips that element.
let [first, , third] = [1, 2, 3];

console.log("First:", first); // 1
console.log("Third:", third); // 3


// 4. Default values
// A default is used when the corresponding value is undefined or missing.
let [p = 10, q = 20] = [5];

console.log("p:", p); // 5
console.log("q:", q); // 20


// 5. Swapping variables
// The right-hand array is evaluated first, then values are reassigned.
let m = 1;
let n = 2;

[m, n] = [n, m];

console.log("After swapping:", m, n); // 2 1


// 6. Destructuring fewer variables than array elements
// Unassigned elements are simply ignored.
let [one, two] = [100, 200, 300];

console.log("one:", one); // 100
console.log("two:", two); // 200


// 7. Rest pattern
// ...rest collects all remaining elements into a new array.
let [head, ...rest] = [10, 20, 30, 40];

console.log("Head:", head); // 10
console.log("Rest:", rest); // [20, 30, 40]


// 8. Default values with undefined and null
// undefined triggers the default; null does not.
let [u = 50, v = 60] = [undefined, null];

console.log("u:", u); // 50
console.log("v:", v); // null