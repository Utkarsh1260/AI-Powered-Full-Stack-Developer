
// 1. toFixed() - Formats decimal places (returns a string)
let n = 3.14159;
console.log("toFixed(2):", n.toFixed(2));
console.log("Type:", typeof n.toFixed(2));

// 2. Number() - Converts a value to a number
console.log("\nNumber('42'):", Number("42"));
console.log("Number('42abc'):", Number("42abc"));

// 3. parseInt() - Parses an integer
console.log("\nparseInt('42px'):", parseInt("42px"));

// 4. parseFloat() - Parses a decimal number
console.log("parseFloat('3.14kg'):", parseFloat("3.14kg"));

// 5. isNaN() - Checks whether a value becomes NaN
console.log("\nisNaN('hello'):", isNaN("hello"));

// 6. Number.isInteger() - Checks for integers
console.log("\nNumber.isInteger(5):", Number.isInteger(5));
console.log("Number.isInteger(5.5):", Number.isInteger(5.5));
