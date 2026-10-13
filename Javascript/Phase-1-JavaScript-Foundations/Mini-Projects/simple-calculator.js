const prompt = require("prompt-sync")();

// 1. Taking User Input
let num1 = Number(prompt("Enter first number: "));
let operator = prompt("Enter operator (+, -, *, /): ");
let num2 = Number(prompt("Enter second number: "));

// 2. Performing Calculation
let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num2 !== 0
        ? num1 / num2
        : "Cannot divide by zero";
} else {
    result = "Invalid operator";
}

// 3. Displaying Result
console.log("Result:", result);
