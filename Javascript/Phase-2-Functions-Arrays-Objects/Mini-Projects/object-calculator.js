
let prompt = require("prompt-sync")();

// Calculator object
let calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    multiply: function(a, b) {
        return a * b;
    },

    divide: function(a, b) {
        if (b === 0) {
            return "Cannot divide by zero!";
        }
        return a / b;
    },

    modulus: function(a, b) {
        return a % b;
    },

    power: function(a, b) {
        return a ** b;
    }
};

// Main menu
let choice;

while (choice !== 0) {

    console.log(`
    ===== CALCULATOR =====

    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Modulus
    6. Power
    0. Exit

    ======================
    `);

    choice = Number(prompt("Select operation: "));

    if (choice === 0) {
        console.log("Calculator closed. Goodbye!");
        break;
    }

    if (choice < 1 || choice > 6) {
        console.log("Invalid choice!");
        continue;
    }

    let num1 = Number(prompt("Enter first number: "));
    let num2 = Number(prompt("Enter second number: "));

    let result;

    switch (choice) {
        case 1:
            result = calculator.add(num1, num2);
            break;

        case 2:
            result = calculator.subtract(num1, num2);
            break;

        case 3:
            result = calculator.multiply(num1, num2);
            break;

        case 4:
            result = calculator.divide(num1, num2);
            break;

        case 5:
            result = calculator.modulus(num1, num2);
            break;

        case 6:
            result = calculator.power(num1, num2);
            break;
    }

    console.log("Result:", result);
}
