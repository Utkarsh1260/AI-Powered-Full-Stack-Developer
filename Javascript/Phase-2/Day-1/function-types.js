/*
===========================================================
01 — FUNCTIONS COMPLETE GUIDE
===========================================================

A function is a reusable block of code that performs a task.

INPUT → FUNCTION → OUTPUT

Function types covered:
1. Function Declaration
2. Function Expression
3. Anonymous Function
4. Arrow Function

Also:
5. Parameters & Arguments
6. Default Parameters
7. Rest Parameters
8. Return
9. Callback
10. Higher-Order Function
11. IIFE
12. Pure & Impure Function
13. Recursion
*/


// =========================================================
// 1. FUNCTION DECLARATION
// =========================================================

// A named function created using the `function` keyword.
//
// USE WHEN:
// You want a normal reusable function.
//
// WHY:
// Easy to read and understand.
//
// Function declarations are hoisted.

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Parameter:
// `a` and `b` are parameters.
//
// Argument:
// `10` and `20` are arguments.
//
// add(a, b)
//      ↑ ↑
//  parameters
//
// add(10, 20)
//      ↑  ↑
//   arguments



// =========================================================
// 2. FUNCTION EXPRESSION
// =========================================================

// A function stored inside a variable.
//
// USE WHEN:
// You want to store a function as a value.

const subtract = function (a, b) {
    return a - b;
};

console.log(subtract(20, 5));


// Unlike a function declaration, don't try to call a
// function expression before its initialization.


// =========================================================
// 3. ANONYMOUS FUNCTION
// =========================================================

// A function without its own name.

const sayHello = function () {
    console.log("Hello!");
};

sayHello();


// Anonymous functions are commonly used as callbacks.


// =========================================================
// 4. ARROW FUNCTION
// =========================================================

// Modern shorter syntax.

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));


// If there is only one expression,
// return can be written implicitly.

const divide = (a, b) => a / b;

console.log(divide(20, 5));


// One parameter:
// parentheses can be omitted.

const square = x => x * x;

console.log(square(5));


// No parameters:
// parentheses are required.

const greet = () => console.log("Hello!");

greet();


// Multi-line arrow function:

const calculate = (a, b) => {
    const sum = a + b;
    const result = sum * 2;

    return result;
};

console.log(calculate(5, 10));


// =========================================================
// 5. DEFAULT PARAMETERS
// =========================================================

// If no argument is provided,
// the default value is used.

function greetUser(name = "Guest") {
    return `Hello, ${name}`;
}

console.log(greetUser("Utkarsh"));
console.log(greetUser());


// =========================================================
// 6. REST PARAMETERS
// =========================================================

// Rest collects multiple arguments into an array.

function sum(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));


// `numbers` is a real array.


// =========================================================
// 7. RETURN
// =========================================================

// return sends a value back to the caller.

function multiplyNumbers(a, b) {

    return a * b;

}

const result = multiplyNumbers(4, 5);

console.log(result);


// return immediately stops the function.

function checkAge(age) {

    if (age < 0) {
        return "Invalid age";
    }

    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(checkAge(-5));
console.log(checkAge(20));
console.log(checkAge(10));


// =========================================================
// 8. FUNCTION AS A VALUE
// =========================================================

// Functions can be stored in variables.

const sayHi = function () {
    console.log("Hi!");
};

sayHi();


// =========================================================
// 9. CALLBACK FUNCTION
// =========================================================

// A function passed to another function
// is called a callback.

function processUser(name, callback) {

    console.log("Processing user:", name);

    callback(name);
}

function welcome(name) {

    console.log("Welcome", name);

}

processUser("Utkarsh", welcome);


// Another callback example:

setTimeout(function () {

    console.log("3 seconds completed");

}, 3000);


// =========================================================
// 10. HIGHER-ORDER FUNCTION
// =========================================================

// A function that:
// 1. Accepts another function
// OR
// 2. Returns another function.
//
// is called a higher-order function.

function callTwice(fn) {

    fn();
    fn();

}

function saySomething() {

    console.log("JavaScript");

}

callTwice(saySomething);


// =========================================================
// 11. RETURNING A FUNCTION
// =========================================================

function createGreeting(greeting) {

    return function (name) {

        console.log(`${greeting}, ${name}`);

    };

}

const hello = createGreeting("Hello");

hello("Utkarsh");


// =========================================================
// 12. IIFE
// =========================================================

// Immediately Invoked Function Expression.
//
// It runs immediately after it is created.

(function () {

    console.log("IIFE executed immediately");

})();


// Useful for creating a private scope,
// especially in older JavaScript code.


// =========================================================
// 13. PURE FUNCTION
// =========================================================

// Same input → same output.
//
// It does not modify anything outside itself.

function pureAdd(a, b) {

    return a + b;

}

console.log(pureAdd(2, 3));
console.log(pureAdd(2, 3));


// =========================================================
// 14. IMPURE FUNCTION
// =========================================================

// Changes something outside the function.

let total = 0;

function addToTotal(number) {

    total += number;

    return total;

}

console.log(addToTotal(10));
console.log(addToTotal(5));


// `total` is changed outside the function.


// =========================================================
// 15. RECURSION
// =========================================================

// A function calling itself is recursion.
//
// Every recursive function needs:
// 1. Base case
// 2. Recursive case

function factorial(number) {

    // Base case
    if (number <= 1) {
        return 1;
    }

    // Recursive case
    return number * factorial(number - 1);

}

console.log(factorial(5));


// 5 * 4 * 3 * 2 * 1
// = 120