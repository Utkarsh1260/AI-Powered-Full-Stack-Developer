// 1. Integer
let int = 42;
console.log("Integer:", int);
console.log("Type:", typeof int);

// 2. Floating-Point Number
let float = 3.14;
console.log("\nFloat:", float);
console.log("Type:", typeof float);

// 3. Negative Number
let negative = -100;
console.log("\nNegative Number:", negative);

// 4. Exponent Notation
let exponent = 5e3; // 5 × 10^3 = 5000
console.log("\nExponent Notation:", exponent);

// 5. Arithmetic with Numbers
console.log("\nAddition:", int + float);
console.log("Multiplication:", int * 2);

// 6. Special Number Values
console.log("\nInfinity:", 1 / 0);
console.log("NaN:", "hello" * 2);
console.log("Is NaN?", Number.isNaN("hello" * 2));
