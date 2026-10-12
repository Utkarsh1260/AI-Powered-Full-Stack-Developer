const prompt = require("prompt-sync")();

// 1. Taking String Input
let name = prompt("What is your name? ");

console.log("Hello, " + name);

// 2. Taking Numeric Input
let age = Number(prompt("Enter your age: "));

console.log("Age:", age);
console.log("Type:", typeof age);

// 3. Checking Age
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
