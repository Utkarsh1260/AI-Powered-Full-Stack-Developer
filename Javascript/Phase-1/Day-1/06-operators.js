// Arithmetic
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


// Assignment
let x = 10;

x += 5;
x -= 2;
x *= 2;
x /= 2;

console.log(x);


// Comparison
console.log(5 === 5);
console.log(5 === "5");
console.log(5 !== "5");

console.log(10 > 5);
console.log(10 <= 10);


// Logical
const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isAdmin);


// Ternary
const age = 21;

const status = age >= 18 ? "Adult" : "Minor";

console.log(status);