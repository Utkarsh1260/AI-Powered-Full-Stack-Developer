// ... on the right side of = or in a function call → spread (expands).
// ... on the left side of = or in a parameter list → rest (collects).


// Spread syntax expands array elements into individual elements.
let nums = [1, 2, 3];

let more = [0, ...nums, 4];

console.log("Expanded array:", more);
// [0, 1, 2, 3, 4]


// ==========================================
// 2. SPREAD — COPY AN ARRAY
// ==========================================

// [...array] creates a shallow copy of the array.
// Changes to the new array do not affect the original's top-level elements.
let copy = [...nums];

copy.push(4);

console.log("Original array:", nums); // [1, 2, 3]
console.log("Copied array:", copy);   // [1, 2, 3, 4]


// ==========================================
// 3. SPREAD — COMBINE ARRAYS
// ==========================================

// Spread expands both arrays into one new array.
let combined = [...[1, 2], ...[3, 4]];

console.log("Combined array:", combined);
// [1, 2, 3, 4]


// ==========================================
// 4. SPREAD — PASS ARRAY ELEMENTS AS ARGUMENTS
// ==========================================

// Math.max() expects individual numeric arguments.
// Spread expands the array elements into those arguments.
let values = [5, 3, 9, 1];

console.log("Maximum:", Math.max(...values)); // 9
console.log("Minimum:", Math.min(...values)); // 1


// ==========================================
// 5. REST — COLLECT ARGUMENTS INTO AN ARRAY
// ==========================================

// Rest syntax collects all supplied arguments into the nums array.
function sum(...nums) {
    // reduce() combines all numbers into a single total.
    return nums.reduce((a, b) => a + b, 0);
}

console.log("Sum:", sum(1, 2, 3, 4)); // 10
console.log("Sum:", sum(5, 10));      // 15
console.log("Sum:", sum());           // 0


// ==========================================
// 6. REST — COMBINE NORMAL AND REST PARAMETERS
// ==========================================

// The first argument goes into name.
// All remaining arguments are collected into marks.
function showStudent(name, ...marks) {
    console.log("Student:", name);
    console.log("Marks:", marks);
}

showStudent("Aman", 85, 90, 78);

// Student: Aman
// Marks: [85, 90, 78]


// ==========================================
// 7. SPREAD VS REST
// ==========================================

// SPREAD: expands an array into individual values.
let numbers = [10, 20, 30];
console.log(...numbers); // 10 20 30

// REST: collects individual values into an array.
function display(...items) {
    console.log(items);
}

display(10, 20, 30); // [10, 20, 30]