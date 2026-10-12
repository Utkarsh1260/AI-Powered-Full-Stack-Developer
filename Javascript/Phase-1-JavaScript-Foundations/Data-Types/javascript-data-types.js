// 1. String
let name = "Aman";
console.log("1. String:", name);
console.log("Type:", typeof name);

// 2. Number
let age = 25;
let price = 99.99;
console.log("\n2. Number:", age, price);
console.log("Type:", typeof age);

// 3. Boolean
let isStudent = true;
console.log("\n3. Boolean:", isStudent);
console.log("Type:", typeof isStudent);

// 4. Null
let car = null;
console.log("\n4. Null:", car);
console.log("Type:", typeof car); // Historical JavaScript behavior

// 5. Undefined
let job;
console.log("\n5. Undefined:", job);
console.log("Type:", typeof job);

// 6. Symbol
let id = Symbol("uid");
console.log("\n6. Symbol:", id);
console.log("Type:", typeof id);

// 7. BigInt
let bigNum = 12345678901234567890n;
console.log("\n7. BigInt:", bigNum);
console.log("Type:", typeof bigNum);

// ==========================================
// Non-Primitive Type: Object
// ==========================================

// 8. Object
let student = {
    name: "Aman",
    age: 25
};

console.log("\n8. Object:", student);
console.log("Type:", typeof student);

// 9. Array
let colors = ["Red", "Green", "Blue"];

console.log("\n9. Array:", colors);
console.log("Type:", typeof colors);
console.log("Actual Array Check:", Array.isArray(colors));

// 10. Function
function greet() {
    return "Hello, JavaScript!";
}

console.log("\n10. Function:", greet());
console.log("Type:", typeof greet);