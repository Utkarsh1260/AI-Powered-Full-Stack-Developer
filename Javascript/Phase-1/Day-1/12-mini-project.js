const num1 = 20;
const num2 = 5;
const operator = "*";

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

console.log(`Result: ${result}`);