// 1. String
console.log("1. String:", typeof "hello");

// 2. Number
console.log("2. Number:", typeof 42);

// 3. Boolean
console.log("3. Boolean:", typeof true);

// 4. Undefined
console.log("4. Undefined:", typeof undefined);

// 5. Null (Historical JavaScript Quirk)
console.log("5. Null:", typeof null);

// 6. Object
console.log("6. Object:", typeof { name: "Aman" });

// 7. Array
console.log("7. Array:", typeof []);

// 8. Function
console.log("8. Function:", typeof function () {});

// 9. BigInt
console.log("9. BigInt:", typeof 123n);

// 10. Symbol
console.log("10. Symbol:", typeof Symbol("id"));

// ==========================================
// Checking an Array Correctly
// ==========================================

let colors = ["Red", "Green", "Blue"];

console.log("\nArray Check:", Array.isArray(colors));
