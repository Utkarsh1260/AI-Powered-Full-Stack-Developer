
// ==========================================
// JavaScript Variable Naming Rules
// ==========================================

// 1. Valid variable names
let studentName = "Utkarsh";
let _userAge = 21;
let $totalAmount = 500;
let marks2026 = 85;

console.log("1. Valid Variable Names:");
console.log(studentName, _userAge, $totalAmount, marks2026);


// 2. Variable names cannot start with a digit
// let 1student = "Rahul"; // SyntaxError

// Correct approach:
let student1 = "Rahul";

console.log("\n2. Variable Cannot Start With a Digit:");
console.log(student1);


// 3. Reserved keywords cannot be used as variable names
// let let = 10; // SyntaxError
// let if = 20;  // SyntaxError

// Correct approach:
let userRole = "Student";

console.log("\n3. Avoid Reserved Keywords:");
console.log(userRole);


// 4. JavaScript is case-sensitive
let age = 21;
let Age = 25;

console.log("\n4. Case-Sensitive Variables:");
console.log("age =", age);
console.log("Age =", Age);


// 5. camelCase naming convention
let firstName = "Utkarsh";
let totalAmount = 1500;
let userAge = 21;

console.log("\n5. camelCase Convention:");
console.log(firstName, totalAmount, userAge);


// 6. UPPER_SNAKE_CASE for true constants
const MAX_USERS = 100;
const PI = 3.14159;

console.log("\n6. Constants:");
console.log("Maximum Users:", MAX_USERS);
console.log("PI:", PI);


// 7. Meaningful variable names
let a = 5; // Bad naming example
let studentCount = 5; // Good naming example

console.log("\n7. Meaningful Variable Names:");
console.log("Bad example:", a);
console.log("Good example:", studentCount);
